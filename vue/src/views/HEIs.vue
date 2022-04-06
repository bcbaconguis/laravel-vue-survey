<template>
<PageComponent>

  <template v-slot:header>
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900"> HEI Profiles </h1>

          <a href="#my-modal-2" class="py-2 px-3 text-white bg-emerald-500 rounded-md hover:bg-emerald-600">Add new HEI</a>

      </div>

    <!-- Create HEI modal -->
          <div class="modal" id="my-modal-2">
            <div class="modal-box">
              <h3 class="font-bold text-lg">Create HEI</h3>

              <form @submit.prevent="saveHEI">

              <label for="title" class="block text-sm font-medium text-gray-700">Institution Name</label>
              <input type="text" v-model="model.institution_name" name="institution_name" id="institution_name" autocomplete="survey_title" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required/>

               <label for="title" class="block text-sm font-medium text-gray-700">Street</label>
              <input type="text" v-model="model.street" name="street" id="street" autocomplete="survey_title" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required/>

                <label for="title" class="block text-sm font-medium text-gray-700">Municipality</label>
              <input type="text" v-model="model.municipality" name="municipality" id="municipality" autocomplete="survey_title" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required/>


               <label for="title" class="block text-sm font-medium text-gray-700">Province</label>
              <input type="text" v-model="model.province" name="province" id="province" autocomplete="survey_title" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required/>


               <label for="title" class="block text-sm font-medium text-gray-700">Postal Code</label>
              <input type="text" name="postal_code" id="postal_code" v-model="model.postal_code" autocomplete="survey_title" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required/>


               <label for="title" class="block text-sm font-medium text-gray-700">Institutional Telephone</label>
              <input type="text" name="institutional_telephone" id="institutional_telephone" v-model="model.institutional_telephone" autocomplete="survey_title" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required/>


               <label for="title" class="block text-sm font-medium text-gray-700">Institutional Fax No.</label>
              <input type="text" name="institutional_fax_no" id="institutional_fax_no" v-model="model.institutional_fax_no" autocomplete="survey_title" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required/>


              <label for="title" class="block text-sm font-medium text-gray-700">Institutional Email Address</label>
              <input type="text" name="institutional_emailaddress" id="institutional_emailaddress" v-model="model.institutional_emailaddress" autocomplete="survey_title" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required/>

              <label for="title" class="block text-sm font-medium text-gray-700">Institutional Head</label>
              <input type="text" name="institutional_head" id="institutional_head" v-model="model.institutional_head" autocomplete="survey_title" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required/>

              <label for="title" class="block text-sm font-medium text-gray-700">Position</label>
              <input type="text" name="position" id="position" v-model="model.position" autocomplete="survey_title" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required/>

                     <!-- Status -->
                <div class="flex items-start mt-3">
                    <div class="flex items-center h-5">
                        <input type="checkbox" name="status" id="status" v-model="model.status" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                    </div>

                    <div class="ml-3 text-sm">
                            <label for="status" class="font-medium text-gray-700">Active</label>
                    </div>
                </div>
                <!-- /Status -->

              <div class="modal-action">
              <a href="#" class="btn">Close</a>
                  <button type="submit" class="py-3 px-5 ml-2 text-white bg-emerald-500 rounded-md hover:bg-emerald-60">Save</button>

              </div>

              </form>


            </div>
          </div>

    <!-- Ends Here -->

  </template>
<!--
  <div>
    <pre>{{ surveys }}</pre>
  </div> -->

<div class="overflow-x-auto">
  <table class="table w-full">
    <!-- head -->
    <thead>
      <tr>
        <th>ID</th>
        <th>Institution Name</th>
        <th>Street</th>
        <th>Municipality</th>
        <th>Province</th>
        <th>Postal Code</th>
        <th colspan="2">Action</th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr v-for="hei in heis" :key="hei.id">
        <td>{{hei.id}}</td>
        <td>{{hei.institution_name}}</td>
        <td>{{hei.street}}</td>
        <td>{{hei.municipality}}</td>
        <td>{{hei.province}}</td>
        <td>{{hei.postal_code}}</td>
        <td>
          <button type="submit" class="py-2 px-5 ml-2 text-white bg-emerald-500 rounded-md hover:bg-emerald-600">Edit</button>
          <button type="submit" class="py-2 px-5 ml-2 text-white bg-red-500 rounded-md hover:bg-red-600">Delete</button>
        </td>


      </tr>
    </tbody>
  </table>
</div>

</PageComponent>
</template>

<script setup>
import store from "../store";
import { ref,watch, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import PageComponent from "../components/PageComponent.vue";

const route = useRoute();
const router = useRouter();

let model = ref({
    institution_name: "",
    street: "",
    municipality: "",
    province: "",
    postal_code: "",
    institutional_telephone: "",
    institutional_fax_no: "",
    institutional_emailaddress: "",
    institutional_head: "",
    position: "",
    status: false,

});

const heis = computed(() => store.state.heis.data);

store.dispatch('getHEIs')

function saveHEI(){
    store.dispatch("saveHEI", model.value).then(({ data }) => {
        router.push({
            name: "HEIsView",
            params: { id: data.data.id},
        });
    });
}

</script>

<style scoped>

</style>
