<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'phone', 'address', 'city', 'state', 'country', 'postal_code',
        'bio', 'profile_picture', 'website', 'linkedin', 'github', 'twitter',
        'dob', 'gender',
    ];
}
