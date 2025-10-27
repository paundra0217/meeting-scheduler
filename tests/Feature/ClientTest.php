<?php

use App\Models\User;

test('authenticated users and are admin can visit client page', function() {
    $user = User::factory()->create();
    $user->admin = 1;

    $this->actingAs($user);

    $this->get('/clients')->assertOk();
});