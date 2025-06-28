<?php

// app/Models/Customer.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model {
    use HasFactory;

    protected $fillable = [
        'customer_type',
        'salutation',
        'first_name',
        'last_name',
        'company_name',
        'display_name',
        'currency',
        'email',
        'phone',
        'phone_type',
    ];
}
