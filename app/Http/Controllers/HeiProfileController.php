<?php

namespace App\Http\Controllers;

use App\Models\heiProfile;
use Illuminate\Http\Request;
use App\Http\Resources\HEIResource;
use App\Http\Requests\StoreHEIRequest;

class HeiProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = $request->user();
        return HEIResource::collection(heiProfile::where('user_id', $user->id)->paginate());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreHEIRequest $request)
    {
        $hei_profile = heiProfile::create($request->validated());
        return new HEIResource($hei_profile);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\heiProfile  $heiProfile
     * @return \Illuminate\Http\Response
     */
    public function show(heiProfile $heiProfile, Request $request)
    {
        $user = $request->user();
        if ($user->id !== $survey->user_id){
            return abort(403, 'Unauthorized action.');
        }
        return new SurveyResource($survey);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\heiProfile  $heiProfile
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, heiProfile $heiProfile)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\heiProfile  $heiProfile
     * @return \Illuminate\Http\Response
     */
    public function destroy(heiProfile $heiProfile)
    {
        //
    }
}
