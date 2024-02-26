<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Xuxemon extends Model
{
    protected $table = 'xuxemons';
    protected $primaryKey = 'id_xuxemon';
    protected $fillable = ['nombre', 'tipo', 'imagen', 'tamano'];
    use HasFactory;
}
