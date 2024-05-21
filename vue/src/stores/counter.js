import { defineStore } from 'pinia'
import { useLocalStorage} from '@vueuse/core'

export const localStore = defineStore('local', {
    state: () => {
      return {
        user: useLocalStorage('local', {favorites: []})
      };
    },
    getters: {
      getLocalStorage: (state) => (state.local)
    },
    actions: {
      addFavorite(item) {
        this.local.favorites.push(item)
      },
      removeFavorite(item){
        this.local.favorites.splice(indexOf(item)) // not sure if this works
      },
      clearUser() {
        this.local = {}
      }
    },
  }, 
)