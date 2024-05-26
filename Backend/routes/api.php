<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\MembershipController;
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

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/logout', [AuthController::class, 'logout']);
Route::post('/refresh', [AuthController::class, 'refresh']);
Route::get('/user', [AuthController::class, 'user']);

// Routes to manage memberships
Route::get('/memberships', [MembershipController::class, 'index']);
Route::post('/membership', [MembershipController::class, 'store']);
Route::get('/memberships/{id}', [MembershipController::class, 'show']);

// Admin dashboard route with middleware
Route::get('/admin', [DashboardController::class, 'index']);
Route::get('/admin/users', [DashboardController::class, 'getUsersWithMemberships']);


