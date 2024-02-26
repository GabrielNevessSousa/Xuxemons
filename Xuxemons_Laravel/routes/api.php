<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthenticationController;

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


Route::middleware('auth:sanctum')->group( function () {
   
    Route::get('user', [AuthenticationController::class, 'user']);
});

Route::get('/xuxemons', [App\Http\Controllers\XuxemonController::class, 'index']);
Route::post('/save', [App\Http\Controllers\XuxemonController::class, 'store']);
Route::put('/update{id}', [App\Http\Controllers\XuxemonController::class, 'update']);