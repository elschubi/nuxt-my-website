<template>
    <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-2/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    Dein Projekt in guten Händen
                </h1>
                
                <p class="text-2xl leading-relaxed">
                    Ich entwickle <span class="text-brand font-decorative">{ großartige }</span> Weblösungen mit modernen
                    Webtechnologien
                </p>

                <p class="mt-8 mb-8 text-lg lg:text-xl font-decorative leading-relaxed">
                    #vuejs #laravel #astro #wordpress #drupal #rest #graphql #mongodb #aws
                    #gcp #cloud #linux #ops #html #css #responsivedesign #figma #xd #trello
                    #agile #git #github #visualstudio #sass #scss #nuxt #pinia
                </p>

                <div class="lg:flex items-center justify-center">
                    <a href="/pdf/cv.pdf" class="font-semibold text-brand text-xl mr-2 cursor-pointer" download>
                        { <Icon name="bx:file" class="mr-1"></Icon>cv }
                    </a>

                    <br class="block lg:hidden" />
                    
                    <span @click="store.active = 2" class="font-semibold text-brand text-xl mr-2 cursor-pointer">
                        { <Icon name="bx:question-mark" class="mr-1"></Icon>über mich }
                    </span>

                    <br class="block lg:hidden" />

                    <span @click="store.active = 3" class="font-semibold text-brand text-xl mr-2 cursor-pointer">
                        { <Icon name="bx:award" class="mr-1"></Icon>erfahrung }
                    </span>

                    <br class="block lg:hidden" />

                    <span @click="store.active = 4" class="font-semibold text-brand text-xl mr-2 cursor-pointer">
                        { <Icon name="bx:code-alt" class="mr-1"></Icon>projekte }
                    </span>

                    <br class="block lg:hidden" />

                    <a href="https://calendly.com/stefanschuchlenz/disco" target="_BLANK" class="font-semibold text-brand text-xl mr-2 cursor-pointer">
                        { <Icon name="bx:chat" class="mr-1"></Icon>kontakt }
                    </a>
                </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/3 w-5/6">
                <img 
                    class="w-64 h-64 text-center mx-auto object-cover object-center rounded-full" 
                    alt="Stefan Schuchlenz | Full Stack Web Developer" 
                    src="/images/me.jpg">
            </div>
        </div>
    </section>
</template>

<script setup>
    import { useGeneralStore } from '@/stores/general'
    const store = useGeneralStore()
</script>