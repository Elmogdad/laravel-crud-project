<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\FrontController;
use Illuminate\Support\Facades\Route;

   Route::controller(FrontController::class )->group(function () {
    Route::get('/' , 'index')->name('index');
    Route::get('/offers' , 'offers')->name('offers');
    Route::get('/all-prodects' , 'all_products')->name('all-products');
   });



Route::resource('products', ProductController::class );
// Route::get('/products' , [ProductController::class , 'index'] )->name('products.index');
// Route::get('/products/create' , [ProductController::class , 'create'] )->name('products.create');
// Route::post('/products' , [ProductController::class , 'store'] )->name('products.store');
// Route::get('/products/{product}/edit}' , [ProductController::class , 'edit'] )->name('products.edit');
// Route::put('/products/{product}}' , [ProductController::class , 'update'] )->name('products.update');
// Route::delete('/products/{product}}' , [ProductController::class , 'destroy'] )->name('products.destroy');

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
