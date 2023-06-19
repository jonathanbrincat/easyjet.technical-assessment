<template>
  <main class="view__knights-tour bg-orange-600 grow flex">
    <section class="flex-1 flex flex-col lg:flex-row gap-12 max-w-screen-2xl mx-auto px-8">
      <div class="sticky lg:static top-0 basis-3/5">
        <div class="lg:sticky top-0 lg:flex gap-8">
          <div class="bg-stone-700 bg-[url('../svg/clouds-tile.svg')] text-white basis-3/4 px-8 py-4 lg:h-screen">
            <h1 class="text-4xl mb-4">Knight's Tour</h1>

            <div class="text-sm lg:text-md max-h-[20vh] overflow-auto lg:max-h-none lg:overflow-visible">
              <p class="my-4">Write a program to represent the travel of a knight around a chess board. The knight can only move in the normal way and cannot travel through a square it has already been on. If the knight reaches the end of its travel but has not passed through every possible space on the chess board it must backtrack its moves until it finds the route that passes through them all.</p>

              <p class="my-4">The program should represent the state of the board and the moves the knight has made around the board when it is done.</p>
            </div>
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
