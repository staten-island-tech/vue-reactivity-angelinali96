<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { onMounted } from 'vue';
import ProgressSpinner from 'primevue/progressspinner';
import InlineMessage from 'primevue/inlinemessage';
import loading from './stores/loadingVar';
import errorDisplay from './stores/errorVar';
import { localStore } from './stores/local';
const local = localStore();
function favoriteList(){
  if(!local.local.favorites){
  local.initializeFavorite();
}/* else{
  console.log(local.local.favorites)
} */
}
onMounted(() => favoriteList());
</script>

<template>
  <header>

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Favorites</RouterLink>
        <RouterLink to="/compare">Compare</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <ProgressSpinner v-if="loading === true" style="position: fixed;width: 50px; height: 50px" strokeWidth="8" fill="var(--surface-ground)"/>
  <InlineMessage v-if="errorDisplay === true" severity="error" style="position: fixed;">Error loading. </InlineMessage>
  <RouterView />
  <footer>
    <a aria-label="Github Repository" title="GitHub" href="https://github.com/staten-island-tech/vue-reactivity-angelinali96">
        <svg height="24" viewBox="0 0 16 16" version="1.1" width="24">
    <path  style="fill:#6e7681;" d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
</svg>
</a>
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
footer{
  place-items: center;
  justify-content: center;
  display: flex;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 2048px) {
  header {
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
