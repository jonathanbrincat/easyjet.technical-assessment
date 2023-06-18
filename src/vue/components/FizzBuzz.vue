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
        {{ number.verdict }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import Numbers from '../../js/util/Numbers'

const _ = new Numbers()

const state = reactive({
  start: 1,
  end: 30,
})

const range = computed(() => {
  const collection = []

  if (state.end - state.start > 10000) {
    alert(
      "Careful what you wish for! Sensible range restriction enforced to stop you running out of memory and your browser freaking out"
    )

    return []
  }

  for (let i = state.start; i <= state.end; i++) {
    collection.push({
      value: i,
      verdict: fizzBuzz(i),
    })
  }

  return collection
})

function fizzBuzz(n) {
  switch (true) {
    case _.is(n).multipleOf(15):
      return 'FizzBuzz'
    case _.is(n).multipleOf(5):
      return "Buzz";
    case _.is(n).multipleOf(3):
      return "Fizz";
    default:
      return n;
  }
}
</script>
