<?php

use App\Models\User;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHeiProfile extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hei_profile', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class, 'user_id');
            $table->string('institution_name', 1000);
            $table->string('street', 1000);
            $table->string('municipality', 1000);
            $table->string('province', 1000);
            $table->string('postal_code', 1000);
            $table->string('institutional_telephone', 1000);
            $table->string('institutional_fax_no', 1000);
            $table->string('institutional_emailaddress', 1000);
            $table->string('institutional_head', 1000);
            $table->string('position', 1000);
            $table->tinyInteger('status');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hei_profile'){
            $table->dropColumn('institutional_email-address')
        };
    }
}
