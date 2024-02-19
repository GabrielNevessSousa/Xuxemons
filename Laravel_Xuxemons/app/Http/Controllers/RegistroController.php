<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

use Illuminate\Database\Eloquent\ModelNotFoundException;

class RegistroController extends Controller
{
    /* PÁGINA INICIAL */
    public function index()
    {
        try {
            $usuari = User::all();

            return response()->json($usuari, 200);

        } catch (ModelNotFoundException $e) {
            return response()->json([$e,'error' => 'usuari no encontrado'], 404);
        }
    }

    public function show($id)
    {
        try {
            $usuari = User::findOrFail($id);

            return response()->json($usuari, 200);

        } catch (ModelNotFoundException $e) {
            
            return response()->json([$e,'error' => 'usari no encontrado'], 404);
        }
    }

    /* CREACIÓN */
    public function create()
    {
        
    }

    /* GUARDAR */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'nom' => 'required|string',
                'cognom' => 'required|string',
                'password' => 'required|string',
                'email' => 'required|string',
            ]);

            User::create($request->all());

            return response()->json(['message' => 'usuari creado correctamente'], 200);

        } catch (ModelNotFoundException $e) {

            return response()->json(['error' => 'usuari no insertado'], 404);
        }
    }

    /* EDITAR */
    public function edit(User $entrenador)
    {
     
    }

    /* ACTUALIZAR */
    public function update(Request $request, $id)
    {
       
    }

    /*ELIMINAR*/
    public function destroy($id)
    {
        //añade aquí la funcionalidad
        $usuari = User::findOrFail($id); //buscar pokemon
        $usuari->delete();

        return response()->json(['message' => 'usuari eliminado correctamente'], 200);

    }

}