<template>
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto lg:flex lg:flex-wrap">
            <div class="lg:flex w-full mb-20 lg:flex-wrap">
                <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
                    Projekte
                </h1>
                <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
                    Hier ein paar Auszüge aus den weit über 100 Projekten, an denen ich in den letzten Jahren teilhaben durfte
                </p>
            </div>
            <div class="lg:flex lg:flex-wrap md:-m-2 -m-1">
                <div class="lg:flex lg:flex-wrap w-full lg:w-1/2">
                    <div class="md:p-2 p-1 w-full lg:w-1/2">
                        <img alt="gallery" class="w-full object-cover h-full object-center block lg:opacity-70 lg:hover:opacity-100 border border-gray-100 shadow-lg" src="/images/projects/absolutepilots.png">
                    </div>
                    <div class="md:p-2 p-1 w-full lg:w-1/2">
                        <img alt="gallery" class="w-full object-cover h-full object-center block lg:opacity-70 lg:hover:opacity-100 border border-gray-100 shadow-lg" src="/images/projects/motorblock.png">
                    </div>
                    <div class="md:p-2 p-1 w-full">
                        <img alt="gallery" class="w-full h-full object-cover object-center block lg:opacity-70 lg:hover:opacity-100 border border-gray-100 shadow-lg" src="/images/projects/admatrica.png">
                    </div>
                </div>
                <div class="lg:flex lg:flex-wrap w-full lg:w-1/2">
                    <div class="md:p-2 p-1 w-full">
                        <img alt="gallery" class="w-full h-full object-cover object-center block lg:opacity-70 lg:hover:opacity-100 border border-gray-100 shadow-lg" src="/images/projects/pitztal.png">
                    </div>
                    <div class="md:p-2 p-1 w-full lg:w-1/2">
                        <img alt="gallery" class="w-full object-cover h-full object-center block lg:opacity-70 lg:hover:opacity-100 border border-gray-100 shadow-lg" src="/images/projects/faszl.png">
                    </div>
                    <div class="md:p-2 p-1 w-full lg:w-1/2">
                        <img alt="gallery" class="w-full object-cover h-full object-center block lg:opacity-70 lg:hover:opacity-100 border border-gray-100 shadow-lg" src="/images/projects/moudry.png">
                    </div>
                </div>

                <!-- 2 -->
                <div class="lg:flex lg:flex-wrap w-full lg:w-1/2">
                    <div class="md:p-2 p-1 w-full">
                        <img alt="gallery" class="w-full h-full object-cover object-center block lg:opacity-70 lg:hover:opacity-100 border border-gray-100 shadow-lg" src="/images/projects/digitalcameragraz.png">
                    </div>
                    <div class="md:p-2 p-1 w-full lg:w-1/2">
                        <img alt="gallery" class="w-full object-cover h-full object-center block lg:opacity-70 lg:hover:opacity-100 border border-gray-100 shadow-lg" src="/images/projects/beam.png">
                    </div>
                    <div class="md:p-2 p-1 w-full lg:w-1/2">
                        <img alt="gallery" class="w-full object-cover h-full object-center block lg:opacity-70 lg:hover:opacity-100 border border-gray-100 shadow-lg" src="/images/projects/adventwelt.png">
                    </div>
                </div>
                <div class="lg:flex lg:flex-wrap w-full lg:w-1/2">
                    <div class="md:p-2 p-1 w-full lg:w-1/2">
                        <img alt="gallery" class="w-full object-cover h-full object-center block lg:opacity-70 lg:hover:opacity-100 border border-gray-100 shadow-lg" src="/images/projects/mueller.png">
                    </div>
                    <div class="md:p-2 p-1 w-full lg:w-1/2">
                        <img alt="gallery" class="w-full object-cover h-full object-center block lg:opacity-70 lg:hover:opacity-100 border border-gray-100 shadow-lg" src="/images/projects/domainberater.png">
                    </div>
                    <div class="md:p-2 p-1 w-full">
                        <img alt="gallery" class="w-full h-full object-cover object-center block lg:opacity-70 lg:hover:opacity-100 border border-gray-100 shadow-lg" src="/images/projects/adventwelt.png">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { useGeneralStore } from '@/stores/general'
    const store = useGeneralStore()
</script>