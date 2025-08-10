<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('welcome');
// })->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
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

    Route::get('clients', function () {
        return Inertia::render('clients');
    })->name('clients');

    Route::get('clients/add', function() {
        return Inertia::render('add-client');
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';