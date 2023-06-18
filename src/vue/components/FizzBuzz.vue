<template>
  <div class="component__fizz-buzz">
    <p>
      <label>
        <span>From</span>
        <input type="number" v-model="state.start" />
      </label>

      <label>
        <span>To</span>
        <input type="number" v-model="state.end" />
      </label>
    </p>

    <ul>
      <li v-for="(number, index) in range" :key="index">
        {{ number.value }} :: {{ number.verdict }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'

const state = reactive({
  start: 0,
  end: 0,
})

const range = computed(() => {
  const collection = [];

  for (let i = state.start; i <= state.end; i++) {
    collection.push({
      value: i,
      verdict: this.fizzbuzz(i),
    });
  }

  return collection
})

</script>
