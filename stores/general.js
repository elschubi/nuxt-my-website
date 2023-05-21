import { defineStore } from 'pinia'
import { ref } from 'vue'

/**
 * General store for all things website (mostly used for changing visibility of panels)
 */
export const useGeneralStore = defineStore('general-store', () => {
    // Set active panel of website, default = 1 (Hero)
    const active = ref(1)
    
    return { active }
})