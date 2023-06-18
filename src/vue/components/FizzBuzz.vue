<template>    
  <ul class="component__fizz-buzz">
    <li v-for="({ verdict }, index) in range" :key="index">
      {{ verdict }}
    </li>
  </ul>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import Numbers from '../../js/util/Numbers'

const _ = new Numbers()

const props = defineProps({
  start: {
    type: Number,
    default: 0,
  },
  end: {
    type: Number,
    default: 0,
  }
})

const range = computed(() => {
  const collection = []

  if (props.end - props.start > 10000) {
    alert(
      "Careful what you wish for! Sensible range restriction enforced to stop you running out of memory and your browser freaking out"
    )

    return []
  }

  for (let i = props.start; i <= props.end; i++) {
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
