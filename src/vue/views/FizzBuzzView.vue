<template>
  <main class="view__fizz-buzz bg-orange-600 grow flex">
    <section class="flex-1 flex flex-col lg:flex-row gap-12 max-w-screen-2xl mx-auto px-8">
      <div class="sticky lg:static top-0 basis-3/5">
        <div class="lg:sticky top-0 lg:flex gap-8">
          <div class="bg-stone-700 bg-[url('../svg/clouds-tile.svg')] text-white basis-3/4 px-8 py-4 h-screen">
            <h1 class="text-4xl mb-4">Fizz Buzz</h1>

            <p class="my-4">Write a program that can be given a start and end integer and iterate over every number in that range.</p>

            <ul class="list-disc list-outside pl-6 my-4">
              <li>When the number is a multiple of three mark it as Fizz.</li>
              <li>When the number is a multiple of five mark it as Buzz.</li>
              <li>When a number is a multiple of three and five mark it as FizzBuzz.</li>
            </ul>

            <p class="my-4">The program should show the list to the user when it is done.</p>
          </div>

          <div class="bg-orange-600 basis-1/4 px-8 py-4">
            <p class="my-4">Please enter a number range</p>
            <p class="flex flex-row lg:flex-col gap-8">
              <label class="flex flex-col">
                <span>From</span>
                <input class="form__input" type="number" v-model="state.start" />
              </label>
              
              <label class="flex flex-col">
                <span>To</span>
                <input class="form__input" type="number" v-model="state.end" />
              </label>
            </p>
          </div>
        </div>
      </div>
      
      <div class="bg-zinc-900 text-white text-sm p-4 basis-2/5">
        <FizzBuzz class="grow" :start="state.start" :end="state.end" />
      </div>
    </section>
  </main>
</template>

<script setup>
import { reactive } from 'vue'
import FizzBuzz from '../components/FizzBuzz.vue'

const state = reactive({
  start: 1,
  end: 100,
})
</script>
