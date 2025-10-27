<?php

use App\Http\Controllers\ClientController;
use App\Http\Controllers\ClientRepresentativeController;
use App\Http\Controllers\UtilityController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('welcome');
// })->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('schedule', function () {
        return Inertia::render('schedule');
    })->name('schedule');

    Route::get('meetings', function () {
        return Inertia::render('meetings');
    })->name('meetings');

    Route::get('users', function () {
        return Inertia::render('users');
    })->name('users');

    Route::get('clients', [ClientController::class, 'index'])->name('clients');
    Route::get('clients/add', [ClientController::class, 'create'])->name('clients.add');
    Route::get('clients/edit', function() {
        return redirect()->route('clients');
    });
    Route::get('clients/view/{id}', [ClientController::class, 'show'])->name('clients.view');
    Route::get('clients/edit', function() {
        return redirect()->route('clients.add');
    });
    Route::get('clients/edit/{id}', [ClientController::class, 'edit'])->name('clients.edit');

    Route::get('configuration', function () {
        return Inertia::render('configuration/configuration');
    })->name('configuration');


    // API Routes
    Route::prefix('api')->group(function () {
        // Route::get('/test', function() {
        //     return "Hello World";
        // });

        Route::middleware('auth:sanctum')->group(function () {

            //Users
            Route::prefix('users')->group(function () {});

            //Clients
            Route::get('clients', [ClientController::class, 'index'])->name('api.clients.index');
            Route::get('clients/{client}', [ClientController::class, 'show'])->name('api.clients.read');
            Route::post('clients', [ClientController::class, 'store'])->name('api.clients.add');
            Route::patch('clients', [ClientController::class, 'update'])->name('api.clients.edit');
            Route::delete('clients', [ClientController::class, 'destroy'])->name('api.clients.delete');

            //Meetings
            Route::prefix('meetings')->group(function () {});

            //Utilities
            Route::prefix('utility')->group(function () {
                Route::get('country-code', [UtilityController::class, 'country_code'])->name('api.utility.country-code');
            });
        });
    });
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
