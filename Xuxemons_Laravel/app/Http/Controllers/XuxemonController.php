<?php

namespace App\Http\Controllers;
use App\Models\Xuxemon;
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
       $xuxemons = Xuxemon::find($id);
       $xuxemons->update($request->all());
       return response()->json('xuxemon actualitzat',200);
    }
    
}
