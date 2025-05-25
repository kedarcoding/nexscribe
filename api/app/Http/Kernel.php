<?php
namespace App\Http;

use App\Http\Middleware\AdminMiddleware;
use Symfony\Component\HttpKernel\HttpKernel;

class Kernel extends HttpKernel
{
    // Other properties...

    protected $routeMiddleware = [
        // Other middleware...
        'admin' => AdminMiddleware::class,
    ];
}
