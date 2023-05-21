<template>
    <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-brand text-white relative z-10 title-font font-medium text-sm">{{ num }}</div>
        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div class="flex-shrink-0 w-24 h-24 bg-gray-100 p-1 rounded-full inline-flex items-center justify-center">
                <img :src="`/images/experience/${logo}`" class="rounded-full" alt="Stefan Schuchlenz | Senior Full Stack Web Developer" v-if="logo">
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">{{ date }}</h2>
                <p class="leading-relaxed">
                    <slot></slot>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        num: Number,
        logo: String,
        date: String
    })
</script>