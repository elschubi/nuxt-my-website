<template>
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
            
            <ExperienceItem num="" logo="inqrt.png" date="2020-2023">
                CTO & Lead Engineer, inQrt Digital Solutions OG, Wien, Österreich (+ remote)
            </ExperienceItem>

            <ExperienceItem num="" logo="droom.png" date="2010-2020">
                Founder & Lead Engineer, DROOM!, Wien, Österreich (+ remote)
            </ExperienceItem>

            <ExperienceItem num="" logo="webteam.gif" date="2008-2010">
                Senior Full Stack Developer, webteam GmbH, Graz, Österreich
            </ExperienceItem>

            <ExperienceItem num="" date="2004-2008">
                Full Stack Developer, e-novation GmbH, Graz, Österreich
            </ExperienceItem>

            
        </div>
    </section>
</template>

<script setup>
    import { useGeneralStore } from '@/stores/general'
    const store = useGeneralStore()
</script>