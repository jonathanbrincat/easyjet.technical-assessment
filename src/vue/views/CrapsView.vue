<template>
  <main class="view__craps bg-orange-600 grow flex">
    <section class="flex-1 flex flex-col lg:flex-row gap-12 max-w-screen-2xl mx-auto px-8">
      <div class="sticky lg:static top-0 basis-3/5">
        <div class="lg:sticky top-0 lg:flex gap-8">
          <div class="bg-stone-700 bg-[url('../svg/clouds-tile.svg')] text-white basis-3/4 px-8 py-4 h-screen">
            <h1 class="text-4xl mb-4">Craps</h1>

            <p class="my-4">Write a program to simulate a number of games of craps, the user should be able to type in how many games they want played. When finished tell the user:</p>

            <ul class="list-disc list-outside pl-6 my-4">
              <li>The average number rolls per game</li>
              <li>The highest number of rolls</li>
              <li>The lowest number of rolls</li>
              <li>The most common roll</li>
              <li>The average winning percentage</li>
              <li>The number of wins</li>
              <li>The number of losses</li>
            </ul>

            <h2 class="text-2xl my-4">How to play craps</h2>
            <p class="my-4">Each game the "shooter" rolls two dice. If the numbers on the dice add up to 2, 3, or 12 the shooter loses. If the numbers on the dice add up to 7 or 11 the shooter wins. If the numbers on the dice add up to 4, 5, 6, 8, 9, or 10 that sets the "points", the shooter continues to roll until the numbers match the points then the shooter wins, or if a 7 is rolled the shooter loses.</p>
          </div>

          <div class="bg-orange-600 basis-1/4 px-8 py-4">
          </div>
        </div>
      </div>
      
      <div class="bg-zinc-900 text-white text-sm p-4 basis-2/5">
      </div>
    </section>
  </main>
</template>

<script setup>
</script>
