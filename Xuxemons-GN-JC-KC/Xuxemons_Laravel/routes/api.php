<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\XuxemonController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::group(['middleware' => 'cors'], function () {

    Route::post('registre', [AuthenticationController::class, 'store'])->name('registre.store');
});

Route::post('login', [AuthenticationController::class, 'login']);

Route::get('xuxemons', [XuxemonController::class, 'index']);
Route::post('xuxemons', [XuxemonController::class, 'store']);
Route::put('xuxemons/{id}', [XuxemonController::class, 'update']);
Route::delete('xuxemons/{id}', [XuxemonController::class, 'destroy']);

Route::middleware('auth:sanctum')->group( function () {
   
    Route::get('user', [AuthenticationController::class, 'user']);
});

