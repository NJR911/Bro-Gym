<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Membership;
use Illuminate\Support\Facades\Validator;


class MembershipController extends Controller
{
    public function index()
    {
        $memberships = Membership::all();
        return response()->json(['memberships' => $memberships], 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,id',
            'type' => 'required|string',
            'price' => 'required|numeric',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date|after_or_equal:start_date',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }


        $membership = Membership::create([
            'user_id' => $request->user_id,
            'type' => $request->type,
            'price' => $request->price,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
        ]);

        return response()->json(['membership' => $membership], 201);
    }

    public function show($id)
    {
        $membership = Membership::find($id);

        if (!$membership) {
            return response()->json(['error' => 'Membership not found'], 404);
        }

        return response()->json(['membership' => $membership], 200);
    }
}
