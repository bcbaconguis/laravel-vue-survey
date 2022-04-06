<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class HEIResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'institution_name' => $this->institution_name,
            'street' => $this->street,
            'municipality' => $this->municipality,
            'province' => $this->province,
            'postal_code' => $this->postal_code,
            'institutional_telephone' => $this->institutional_telephone,
            'institutional_fax_no' => $this->institutional_fax_no,
            'institutional_emailaddress' => $this->institutional_emailaddress,
            'institutional_head' => $this->institutional_head,
            'position' => $this->position,
            'status' => $this->status,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,


        ];
    }
}
