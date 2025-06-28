<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;
use Illuminate\Http\RedirectResponse;
use Illuminate\Auth\Events\Registered;
use Inertia\Inertia;

class CustomerController extends Controller
{
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'customer_type' => 'required|in:business,individual',
            'salutation' => 'nullable|string|max:10',
            'first_name' => 'nullable|string|max:100',
            'last_name' => 'nullable|string|max:100',
            'company_name' => 'nullable|string|max:255',
            'display_name' => 'required|string|max:255',
            'currency' => 'nullable|string|max:10',
            'email' => 'nullable|email|unique:customers,email',
            'phone' => 'nullable|string|max:20',
            'phone_type' => 'nullable|in:work,mobile',
        ]);

        // ডেটাবেজে validated ডেটা insert করা
        $customer = Customer::create($validated);
        dd($validated);
        // (optional) Event trigger করা
        event(new Registered($customer));

        // Redirect সফল message সহ
      return Inertia::render('coustomer', [
    'success' => 'Customer created!',
]);
    }
}
