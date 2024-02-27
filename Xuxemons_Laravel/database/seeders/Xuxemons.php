<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class XuxemonsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Crear dos xuxemons de ejemplo
        DB::table('xuxemons')->insert([
            'nombre' => 'Xuxemon 1',
            'tipo' => 'Fuego',
            'tamano' => 'Pequeño',
            'img' => 'assets/img2',
        ]);

        DB::table('xuxemons')->insert([
            'nombre' => 'Xuxemon 2',
            'tipo' => 'Agua',
            'tamano' => 'Mediano',
            'img' => 'assets/img1',
        ]);
    }
}
