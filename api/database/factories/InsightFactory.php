<?php
namespace Database\Factories;

use App\Models\Insight;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class InsightFactory extends Factory
{
    protected $model = Insight::class;

    public function definition()
    {
        return [
            'user_id' => User::factory(), // Creates a new User and assigns its ID
            'title' => $this->faker->sentence,
            'content' => $this->faker->paragraph,
            'status' => $this->faker->boolean(80), // 80% chance of being true
            'deleted_at' => null, // Initially, the insight is not soft-deleted
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}

