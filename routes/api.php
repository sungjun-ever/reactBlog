<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('/admin')->group(function(){
    Route::get('/store', [PostController::class, 'store']);
});

Route::prefix('/')->group(function(){
    Route::post('search', [PostController::class, 'search']);
    Route::get('show', [PostController::class, 'index']);
    Route::get('show/{id}', [PostController::class, 'show']);
});

