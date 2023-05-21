<template>
    <Header></Header>
    <slot></slot>
    <Footer></Footer>
</template>

<script setup></script>

<style lang="sass">
    \:root
        --brand: #FF6801

    .text-brand
        color: var(--brand)
    .bg-brand
        background-color: var(--brand)
    .border-brand
        border-color: var(--brand)

    .hover\:text-brand:hover
        color: var(--brand)
    .hover\:bg-brand:hover
        background-color: var(--brand)
    .hover\:border-brand:hover
        border-color: var(--brand)
</style>