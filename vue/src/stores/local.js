import { defineStore } from 'pinia'
import { useLocalStorage} from '@vueuse/core'

export const localStore = defineStore('local', {
    state: () => {
      return {
        local: useLocalStorage('local', {})
      };
    },
    getters: {
      getLocalStorage: (state) => (state.local)
    },
    actions: {
      initializeFavorite(){
        this.local.favorites = [];
      },
      addFavorite(name, code, type) {
        this.local.favorites.push({name: name, code: {code: code, type: type}})
      },
      removeFavorite(index){
        const part1 = this.local.favorites.slice(0, index)
        const part2 = this.local.favorites.slice(index+1)
        this.local.favorites = part1.concat(part2)
      },
      clearUser() {
        this.local = {}
      }
    },
  }, 
)