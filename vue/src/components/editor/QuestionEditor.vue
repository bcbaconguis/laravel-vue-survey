<template>
    <div>

        <div class="flex items-center justify-between">
            <h3 class="text-lg font-bold">
                
            </h3>

        </div>

    </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
    question: Object,
    index: Number,

});

const emit = definteEmits(["change", "addQuestion", "deleteQuestion"]);

const model = ref(JSON.pase(JSON.stringify(props.question)));

</script>

<style lang="scss" scoped>

</style>