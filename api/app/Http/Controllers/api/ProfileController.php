<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Profile;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        return  $request->user()->load('profile');
        $profile = Profile::where('user_id', $request->user()->id)->first();

        if ($profile) {
            return response()->json(['data' => $profile], 200);
        }
        
        return response()->json(['data' => null, 'msg' => 'No Data'], 404);
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */

    public function update(Request $request)
    {
        $userId = $request->user()->id;

        $data = [
            'user_id'     => $userId,
            'address'     => $request->address,
            'postal_code' => $request->postcode,
            'bio'         => $request->bio,
            'dob'         => $request->dob,
            'gender'      => $request->gender,
        ];

        $profile = Profile::updateOrCreate(
            ['user_id' => $userId], // condition to find
            $data                      // data to update or insert
        );

        if ($profile) {
            return response()->json(['data' => $profile], 200);
        }

    return response()->json(['data' => null, 'msg' => 'Profile update failed'], 500);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
