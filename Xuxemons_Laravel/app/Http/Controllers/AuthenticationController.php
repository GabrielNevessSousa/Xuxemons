<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;


use Illuminate\Database\Eloquent\ModelNotFoundException;

class AuthenticationController extends Controller
{
    
    public function index()
    {
        try {
            $usuari = User::all();

            return response()->json($usuari, 200);

        } catch (ModelNotFoundException $e) {
            return response()->json([$e,'error' => 'usuari no encontrado'], 404);
        }
    }

    public function login(Request $request){

        if (!Auth::attempt($request->only(['email', 'password']))) {
            return response([
                'message' => 'invalid credentials'
            ]);
        }

        $user = Auth::user();

        $token = $user->createToken('token')->plainTextToken;

        return $token;

        $cookie = cookie('jwt', $token, 60*24);
        
        return response([
            'message' =>'succes',
        ])->withCookie($cookie);

        /*
        return response([
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'created_at' => $user->created_at,
            'updated_at' => $user->updated_at,
            'token' => $token->accessToken,
            'token_expires_at' => $token->token->expires_at,
        ], 200);

        */
    }

    public function user(){

        return Auth::user();
    }

    

    /* CREACIÓN */


    /* GUARDAR */
    public function store(Request $request)
    {

        $request->merge(['role' => $request->input('role', 'usuario')]);


        try {
            $request->validate([
                'nom' => 'required|string',
                'cognom' => 'required|string',
                'password' => 'required|string',
                'email' => 'required|string',
                'role' =>'string',
            
            ]);

            User::create($request->all());

            return response()->json(['message' => 'usuari creado correctamente'], 200);

        } catch (ModelNotFoundException $e) {

            return response()->json(['error' => 'usuari no insertado'], 404);
        }
    }

    /* EDITAR */
 

    /*ELIMINAR*/
    public function destroy($id)
    {
        //añade aquí la funcionalidad
        $usuari = User::findOrFail($id); //buscar pokemon
        $usuari->delete();

        return response()->json(['message' => 'usuari eliminado correctamente'], 200);

    }

}