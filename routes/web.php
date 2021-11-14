<?php

use Illuminate\Support\Facades\Route;

if (! defined('DEFAULT_VERSION')) {
    define('DEFAULT_VERSION', '8.x');
}

if (! defined('SHOW_VAPOR')) {
    define('SHOW_VAPOR', random_int(1, 2) === 1);
}

if (! defined('SHOW_PROMO')) {
    $int = random_int(1, 3);

    if ($int === 1) {
        define('SHOW_PROMO', 'FORGE');
    } elseif ($int === 2) {
        define('SHOW_PROMO', 'VAPOR');
    } elseif ($int === 3) {
        define('SHOW_PROMO', 'PARTNERS');
    }
}


Route::get('/', function () {
    return view('index');
});
