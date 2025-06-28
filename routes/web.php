<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CustomerController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    
    Route::get('/customer', function (){
        return Inertia::render('coustomer');
    })->name('/customer');
    Route::post('/customer', [CustomerController::class, 'store'])->name('customer.store');



    Route::get('/invoice', function(){
        return Inertia::render('invoice');
    })->name('invoice');
    Route::get('item', function(){
        return Inertia::render('item');
    })->name('item');
});


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
