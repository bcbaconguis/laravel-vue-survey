<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class heiProfile extends Model
{
    use HasFactory;

    protected $table = 'hei_profile';

    protected $fillable = ['user_id', 'institution_name', 'street','municipality', 'province', 'postal_code', 'institutional_telephone', 'institutional_fax_no', 'institutional_emailaddress', 'institutional_head', 'position', 'status'];
}
