<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Http\Requests\StoreClientRequest;
use App\Http\Requests\UpdateClientRequest;
use App\Policies\ClientPolicy;
use Illuminate\Database\Eloquent\Attributes\UsePolicy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

#[UsePolicy(ClientPolicy::class)]
class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $clients = Client::all();

        return Inertia::render('clients/clients', [
            'clients' => $clients,
            'status' => 1
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        if ($request->user()->admin != 1) {
            return redirect()->back();
        } 
        
        return Inertia::render('clients/client-form', [
            'id' => -1
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreClientRequest $request)
    {
        $data = $request->validated();
        Client::create($data);

        return to_route('clients')->with('message', 'Client added!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, $id)
    {
        if ($request->user()->admin != 1) {
            return redirect()->back();
        } 

        // if (empty(trim($id))) {
        //     abort(404);
        //     return;
        // }

        return Inertia::render('clients/view-client', [
            'id' => -1
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, $id)
    {
        if ($request->user()->admin != 1) {
            return redirect()->back();
        } 

        if (empty(trim($id))) {
            abort(404);
            return;
        }

        return Inertia::render('clients/view-client', [
            'id' => $id
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateClientRequest $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
    }

    // /**
    //  * Check for duplication when registering/updating clients.
    //  * Note: This does not enforce each client must have unique information.
    //  */
    // public function check_for_duplication(StoreClientRequest $request) {}
}
