<?php

// use App\Http\Controllers\ClientController;
// use App\Http\Controllers\ClientRepresentativeController;
// use App\Http\Controllers\UtilityController;
// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Route;

// Route::prefix('v1')->group(function() {
//     // Route::get('/test', function() {
//     //     return "Hello World";
//     // });
    
//     Route::middleware('auth:sanctum')->group(function() {
        
//         //Users
//         Route::prefix('users')->group(function() {

//         });
        
//         //Clients
//         Route::get('clients', [ClientController::class, 'index'])->name('clients.index');
//         Route::get('clients/{client}', [ClientController::class, 'show'])->name('clients.read');
//         Route::post('clients', [ClientController::class, 'store'])->name('clients.create');
//         Route::patch('clients/{client}', [ClientController::class, 'edit'])->name('clients.edit');
//         Route::prefix('clients')->group(function() {
//             //Representatives (part of clients)
//             Route::get('representative/{id}', [ClientRepresentativeController::class, 'show'])->name('clients.reps.get');
//             Route::post('representative/{id}', [ClientRepresentativeController::class, 'create'])->name('clients.reps.create');
//             Route::patch('representative/{$clientRepresentative}', [ClientRepresentativeController::class, 'edit'])->name('clients.reps.edit');
//         });
        
//         //Meetings
//         Route::prefix('meetings')->group(function() {
            
//         });

//         //Utilities
//         Route::prefix('utility')->group(function() {
//            Route::get('country-code', [UtilityController::class, 'country_code'])->name('utility.country-code'); 
//         });
//     });
// });