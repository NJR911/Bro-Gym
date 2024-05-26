<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class DashboardController extends Controller
{
    public function index()
    {
        Log::info("Inside admin dashboard");
        return response()->json(['message' => 'Welcome to the admin dashboard']);
    }

    public function getUsersWithMemberships()
    {
        $users = User::with('memberships')->get();
        return response()->json(['users' => $users]);
    }
}

