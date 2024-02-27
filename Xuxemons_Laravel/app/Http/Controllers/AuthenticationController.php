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
        try {
            $request->validate([
                'email' => 'required|string',
                'password' => 'required',
            ]);
    
            if (!Auth::attempt($request->only(['email', 'password']))) {
                 return response()->json(['error' => 'invalid credencialss'], 404);
            }
    
            $user = Auth::user();
            $token = $user->createToken('token')->plainTextToken;
    
            return response()->json(['succes' => $token], 200);
        } catch (ModelNotFoundException $e) {
            // Puedes personalizar el manejo de ModelNotFoundException aquí
            return response()->json(['error' => 'usuari no encontrado'], 404);
        }
    }
    

    public function redirectToRoleSpecificSite()
    {
        $user = Auth::user();

        if ($user->role === 'admin') {
            // Puedes incluir un campo "redirect" en tu respuesta JSON
            return response()->json(['message' => 'Redirigiendo a Dashboard de Admin', 'redirect' => 'admin/dashboard'], 200);
        } elseif ($user->role === 'usuario') {
            // Puedes incluir un campo "redirect" en tu respuesta JSON
            return response()->json(['message' => 'Redirigiendo a Dashboard de Usuario', 'redirect' => 'user/dashboard'], 200);
        } else {
            // Puedes incluir un campo "redirect" en tu respuesta JSON
            return response()->json(['message' => 'Redirigiendo a Dashboard por defecto', 'redirect' => 'default/dashboard'], 200);
        }
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