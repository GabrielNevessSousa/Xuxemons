<?php

namespace App\Http\Middleware;

use Closure;
use Auth;


class CheckRole
{
    public function handle($request, Closure $next, $role)
    {
       // $user = Auth::user();

       // if ($user && $user->role == $role) {
            return $next($request);
        //}

        return redirect('/login'); 
    }
}

