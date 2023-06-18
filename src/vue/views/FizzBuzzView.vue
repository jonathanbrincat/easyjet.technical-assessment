<!--
===========
Fizz Buzz
===========

Write a program that can be given a start and end integer and iterate over every number in that range.

- When the number is a multiple of three mark it as Fizz.
- When the number is a multiple of five mark it as Buzz.
- When a number is a multiple of three and five mark it as FizzBuzz.

The program should show the list to the user when it is done.
-->

<template>
  <main class="view__fizz-buzz">
    <h1>Fizz Buzz</h1>

    <FizzBuzz />
  </main>
</template>

<script setup>
import FizzBuzz from '../components/FizzBuzz.vue'
</script>
