<?php

namespace Database\Factories;

use App\Models\Profile;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProfileFactory extends Factory
{
    protected $model = Profile::class;

    public function definition(): array
    {
        return [
            'user_id' => User::factory(), // Ensure User Factory exists
            'phone' => $this->faker->phoneNumber(),
            'address' => $this->faker->address(),
            'city' => $this->faker->city(),
            'state' => $this->faker->state(),
            'country' => $this->faker->country(),
            'postal_code' => $this->faker->postcode(),
            'bio' => $this->faker->paragraph(),
            'profile_picture' => null,
            'website' => $this->faker->url(),
            'linkedin' => 'https://linkedin.com/in/' . $this->faker->userName(),
            'github' => 'https://github.com/' . $this->faker->userName(),
            'twitter' => 'https://twitter.com/' . $this->faker->userName(),
            'dob' => $this->faker->date(),
            'gender' => $this->faker->randomElement(['male', 'female', 'other']),
        ];
    }
}
