import { ref } from 'vue'
import { defineStore } from 'pinia'

export const currentPage = defineStore('currentPage', () => {
  const currentPage = ref('home')
  function setCurrentPage(newPage: string) {
    currentPage.value = newPage
  }

  return { currentPage, setCurrentPage }
})
