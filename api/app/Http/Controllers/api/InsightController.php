<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Insight;
use Illuminate\Http\Request;

class InsightController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->query('search');
        $query = Insight::query();
        if ($search) {
            $query->where('name', 'like', "%{$search}%");
        } 
        $insights=$query->where(['status'=>1])->paginate(10);

        if(!empty($insights)){
            return response()->json($insights,200);
    }
        return response()->json(['msg'=>'No data'],201);
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
    public function show(string $id)
    {
        //
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
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
