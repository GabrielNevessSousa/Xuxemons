<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsuariosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Crear un usuario admin
        DB::table('usuarios')->insert([
            'nom' => 'Admin',
            'cognom' => 'AdminApellido',
            'nick' => 'admin_user',
            'email' => 'admin@example.com',
            'password' => Hash::make('123'), // Asegúrate de encriptar la contraseña
            'role' => 'admin',
        ]);

        // Crear un usuario usuari
        DB::table('usuarios')->insert([
            'nom' => 'Usuario',
            'cognom' => 'UsuarioApellido',
            'nick' => 'regular_user',
            'email' => 'user@example.com',
            'password' => Hash::make('123'), // Asegúrate de encriptar la contraseña
            'role' => 'usuari',
        ]);
    }
}
