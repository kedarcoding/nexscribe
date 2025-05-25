<?php
use App\Http\Controllers\api\InsightController;
use App\Http\Controllers\api\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\AuthController;


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/me', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/profile', [ProfileController::class, 'show']);
    Route::put('/profile/update', [ProfileController::class, 'update']);
    Route::get('/insights', [InsightController::class, 'index']);
});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
