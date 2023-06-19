<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-stone-800 bg-[url('../img/airplane-silhouette.png')] bg-no-repeat bg-right bg-[length:25%] text-white">
    <div class="flex flex-row-reverse gap-12 items-center max-w-screen-2xl mx-auto px-8 py-2">
      <h1 class="text-xl font-semibold my-4">Easyjet Technical Assessment</h1>

      <nav class="grow flex gap-8">
        <RouterLink class="hover:text-amber-400" to="/fizz-buzz">Fizz Buzz</RouterLink>
        <!-- <RouterLink class="hover:text-amber-400" to="/knights-tour">Knight's Tour</RouterLink> -->
        <RouterLink class="hover:text-amber-400" to="/craps">Craps</RouterLink>
      </nav>
    </div>
  </header>
  
  <RouterView />

  <footer class="bg-black text-white">
    <div class="max-w-screen-2xl mx-auto px-8">
      <p class="text-sm my-4 float-right">&copy; pix8 Ltd 2012 - {{ new Date().getFullYear() }}</p>
    </div>
  </footer>
</template>
