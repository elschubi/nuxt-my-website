<template>
    <div class="mt-12 mb-8 text-center mx-auto">
        <span @click="store.active = 1" class="font-semibold text-brand text-xl mr-2 cursor-pointer">
            [<Icon name="bx:up-arrow-alt" class="mr-1"></Icon>zurück]
        </span>
    </div>
</template>

<script setup>
    import { useGeneralStore } from '@/stores/general'
    const store = useGeneralStore()
</script>