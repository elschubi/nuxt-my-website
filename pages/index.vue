<template>
    <main>
        <Hero v-if="store.active == 1"></Hero>
        <About v-if="store.active == 2">2</About>
        <Experience v-if="store.active == 3">3</Experience>
        <Projects v-if="store.active == 4">4</Projects>
        <Contact v-if="store.active == 5">5</Contact>

        <Back v-if="store.active != 1"></Back>
    </main>
</template>

<script setup>
    import { useGeneralStore } from '@/stores/general'
    const store = useGeneralStore()
</script>