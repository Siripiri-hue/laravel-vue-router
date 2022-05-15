<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// rotta collegata all'api PostController
// tutte le rotte avranno in automatico il prefisso api
// Route::get('/posts', 'Api\PostController@index');

// trasformo la rotta in una rotta risorsa e creo solo le rotte index e show
Route::resource('posts', 'Api\PostController')->only(['index', 'show']);