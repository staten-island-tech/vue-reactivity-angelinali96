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
}
}
onMounted(() => favoriteList());
</script>

<template>
  <ProgressSpinner v-if="loading === true" style="position: fixed;width: 50px; height: 50px" strokeWidth="8" fill="var(--surface-ground)"/>
  <header>

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Favorites</RouterLink>
        <RouterLink to="/compare">Compare</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <InlineMessage v-if="errorDisplay === true" severity="error" style="position: fixed;">Error loading. </InlineMessage>
  <RouterView />

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
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
