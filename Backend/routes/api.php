<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::post('/register', [AuthController::class, 'register']);

// Route::group(['prefix' => 'auth'], function () {
//     Route::post('login', 'AuthController@login');
//     Route::post('register', 'AuthController@register');
//     Route::post('logout', 'AuthController@logout');
//     Route::post('refresh', 'AuthController@refresh');
//     Route::get('user', 'AuthController@user');
// });

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/logout', [AuthController::class, 'logout']);
Route::post('/refresh', [AuthController::class, 'refresh']);
Route::get('/user', [AuthController::class, 'user']);

