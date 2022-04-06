<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreHEIREquest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }


    protected function prepareForValidation(){
        $this->merge([
            'user_id' => $this->user()->id
        ]);

    }


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'user_id' => 'exists:users,id',
            'institution_name' => 'required|string|max:1000',
            'street' => 'required|string|max:1000',
            'municipality' => 'required|string|max:1000',
            'province' => 'required|string|max:1000',
            'postal_code' => 'required|string|max:1000',
            'institutional_telephone' => 'required|string|max:1000',
            'institutional_fax_no' => 'required|string|max:1000',
            'institutional_emailaddress' => 'required|string|max:1000',
            'institutional_head' => 'required|string|max:1000',
            'position' => 'required|string|max:1000',
            'status' => 'required|boolean',
        ];
    }
}
