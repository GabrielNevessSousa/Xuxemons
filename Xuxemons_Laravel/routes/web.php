<?php

use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\XuxemonController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::resource('registre', AuthenticationController::class);
Route::resource('login', AuthenticationController::class);
Route::resource('user', AuthenticationController::class);

Route::resource('xuxemons', XuxemonController::class);