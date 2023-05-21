<template>
    <header class="text-gray-600 body-font cursor-pointer">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <span @click="store.active = 1" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <Icon name="bx:code-curly" class="ml-3 text-brand inline-flex text-3xl"></Icon>
                <span class="ml-1 text-xl">stefanschuchlenz.com</span>
            </span>
            
            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center"></nav>
            
            <a href="https://calendly.com/stefanschuchlenz/disco" target="_BLANK" class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                Kontakt aufnehmen &rarr;
            </a>
        </div>
    </header>
</template>

<script setup>
    import { useGeneralStore } from '@/stores/general'
    const store = useGeneralStore()
</script>