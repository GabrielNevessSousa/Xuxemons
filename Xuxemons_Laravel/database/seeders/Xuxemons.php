<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Xuxemons extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Definir los datos de los Xuxemons
        $xuxemons = [
            ['nombre' => 'apleki', 'tipo' => 'Tierra', 'img' => 'assets/apleki.png'],
            ['nombre' => 'avecrem', 'tipo' => 'Tierra', 'img' => 'assets/avecrem.png'],
            ['nombre' => 'bambino', 'tipo' => 'Tierra', 'img' => 'assets/bambino.png'],
            ['nombre' => 'beebo', 'tipo' => 'Aire', 'img' => 'assets/beebo.png'],
            ['nombre' => 'boo-hoot', 'tipo' => 'Aire', 'img' => 'assets/boo-hoot.png'],
            ['nombre' => 'cabrales', 'tipo' => 'Tierra', 'img' => 'assets/cabrales.png'],
            ['nombre' => 'catua', 'tipo' => 'Aire', 'img' => 'assets/catua.png'],
            ['nombre' => 'catyusa', 'tipo' => 'Aire', 'img' => 'assets/catyusa.png'],
            ['nombre' => 'chapapa', 'tipo' => 'Agua', 'img' => 'assets/chapapa.png'],
            ['nombre' => 'chopper', 'tipo' => 'Tierra', 'img' => 'assets/chopper.png'],
            ['nombre' => 'cuellilargi', 'tipo' => 'Tierra', 'img' => 'assets/cuellilargi.png'],
            ['nombre' => 'deskangoo', 'tipo' => 'Tierra', 'img' => 'assets/deskangoo.png'],
            ['nombre' => 'doflamingo', 'tipo' => 'Tierra', 'img' => 'assets/doflamingo.png'],
            ['nombre' => 'dolly', 'tipo' => 'Tierra', 'img' => 'assets/dolly.png'],
            ['nombre' => 'elconchudo', 'tipo' => 'Agua', 'img' => 'assets/elconchudo.png'],
            ['nombre' => 'eldientes', 'tipo' => 'Tierra', 'img' => 'assets/eldientes.png'],
            ['nombre' => 'elgominas', 'tipo' => 'Tierra', 'img' => 'assets/elgominas.png'],
            ['nombre' => 'flipper', 'tipo' => 'Agua', 'img' => 'assets/flipper.png'],
            ['nombre' => 'floppi', 'tipo' => 'Tierra', 'img' => 'assets/floppi.png'],
            ['nombre' => 'horseluis', 'tipo' => 'Agua', 'img' => 'assets/horseluis.png'],
            ['nombre' => 'krokolisko', 'tipo' => 'Agua', 'img' => 'assets/krokolisko.png'],
            ['nombre' => 'kurama', 'tipo' => 'Tierra', 'img' => 'assets/kurama.png'],
            ['nombre' => 'ladybug', 'tipo' => 'Tierra', 'img' => 'assets/ladybug.png'],
            ['nombre' => 'lengualargui', 'tipo' => 'Tierra', 'img' => 'assets/lengualargui.png'],
            ['nombre' => 'medusation', 'tipo' => 'Agua', 'img' => 'assets/medusation.png'],
            ['nombre' => 'meekmeek', 'tipo' => 'Tierra', 'img' => 'assets/meekmeek.png'],
            ['nombre' => 'megalo', 'tipo' => 'Agua', 'img' => 'assets/megalo.png'],
            ['nombre' => 'mocha', 'tipo' => 'Agua', 'img' => 'assets/mocha.png'],
            ['nombre' => 'murcimurci', 'tipo' => 'Aire', 'img' => 'assets/murcimurci.png'],
            ['nombre' => 'nemo', 'tipo' => 'Agua', 'img' => 'assets/nemo.png'],
            ['nombre' => 'oinkcelot', 'tipo' => 'Tierra', 'img' => 'assets/oinkcelot.png'],
            ['nombre' => 'oreo', 'tipo' => 'Tierra', 'img' => 'assets/oreo.png'],
            ['nombre' => 'otto', 'tipo' => 'Agua', 'img' => 'assets/otto.png'],
            ['nombre' => 'pinchimott', 'tipo' => 'Agua', 'img' => 'assets/pinchimott.png'],
            ['nombre' => 'pollis', 'tipo' => 'Tierra', 'img' => 'assets/pollis.png'],
            ['nombre' => 'poson', 'tipo' => 'Aire', 'img' => 'assets/poson.png'],
            ['nombre' => 'quakko', 'tipo' => 'Agua', 'img' => 'assets/quakko.png'],
            ['nombre' => 'rajoy', 'tipo' => 'Aire', 'img' => 'assets/rajoy.png'],
            ['nombre' => 'rawlion', 'tipo' => 'Tierra', 'img' => 'assets/rawlion.png'],
            ['nombre' => 'rexxo', 'tipo' => 'Tierra', 'img' => 'assets/rexxo.png'],
            ['nombre' => 'ron', 'tipo' => 'Tierra', 'img' => 'assets/ron.png'],
            ['nombre' => 'sesssi', 'tipo' => 'Tierra', 'img' => 'assets/sesssi.png'],
            ['nombre' => 'shelly', 'tipo' => 'Tierra', 'img' => 'assets/shelly.png'],
            ['nombre' => 'sirucco', 'tipo' => 'Tierra', 'img' => 'assets/sirucco.png'],
            ['nombre' => 'trompeta', 'tipo' => 'Aire', 'img' => 'assets/trompeta.png'],
            ['nombre' => 'trompi', 'tipo' => 'Tierra', 'img' => 'assets/trompi.png'],
            ['nombre' => 'tux', 'tipo' => 'Agua', 'img' => 'assets/tux.png'],
            ['nombre' => 'xocas', 'tipo' => 'Tierra', 'img' => 'assets/xocas.png'],
        ];

        // Insertar los datos en la tabla 'xuxemons'
        DB::table('xuxemons')->insert($xuxemons);
    }
}