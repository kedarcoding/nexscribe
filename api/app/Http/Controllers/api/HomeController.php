<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\JobProfile;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(){
        $data= JobProfile::with('user')->get();
        if(isset($data)){
            return response()->json(['data'=>$data,'message'=>'data fetched'],200);
        }
       return response()->json(['data'=>[],'message'=>'data not found'],200);
    }
}
