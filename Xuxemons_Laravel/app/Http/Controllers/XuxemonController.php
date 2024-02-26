<?php

namespace App\Http\Controllers;
use App\Models\Xuxemon;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;

class XuxemonController extends Controller
{
    public function index()
    {
        $xuxemons = Xuxemon::all();
        return response() ->json($xuxemons);
    }

    public function store(Request $request){
        $xuxemons = New Xuxemon([
            'nombre' => $request->input(('nombre')),
            'tipo' => $request->input(('tipo')),
            'imagen' => $request->input(('imagen')),
            'tamano' => $request->input(('tamano')),
        ]);
        $xuxemons->save();
        return response()->json('Xuxemon creado', 200);
    }

    public function update(Request $request, $id){
        try {
            $request->validate([
                'nombre' => 'required|string',
                'tipo' => 'required|string',
                'tamano' => 'required|string',
                'imagen' => 'string',
            ]
            );
            $xuxemons = Xuxemon::find($id);
            $xuxemons->update([
                'nombre' => $request->input('nombre'),
                'tipo' => $request->input('tipo'),
                'tamano' => $request->input('tamano'),
                'imagen' => $request->input('imagen'),
            ]);

            return response()->json('xuxemon actualitzat', 200);
        } catch(ModelNotFoundException) {
            return response()->json(['error'=>'error al actualizar xuxemon'], 200);
        }
    
    }

    public function destroy($id){
        $xuxemons = Xuxemon::find($id);
        $xuxemons->delete();
        return response()->json('xuxemon eliminado', 200);
    }
}
