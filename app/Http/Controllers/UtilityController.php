<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\File;

class UtilityController extends Controller
{
    public function country_code()
    {
        $path = public_path('data/country-codes.json');
        if (!File::exists($path)) {
            return response()->json(['error' => 'Country codes not found'], 404);
        }
        $countryCodes = json_decode(File::get($path), true);
        return response()->json($countryCodes);
    }
}
