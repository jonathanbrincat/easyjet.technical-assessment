<template>    
  <div class="component__craps">    
    <p class="my-2" v-for="(game, index) in state.games" :key="index">
      <span class="font-bold">Game {{ index + 1 }}</span>
      {{ game }}
    </p>

    <template v-if="state.isComplete">
      <p class="my-4">You played {{ state.games.length }} {{ pluralise(state.games.length, 'game') }}</p>

      <dl>
        <dt class="border border-white mt-4 p-1">Average number of rolls per game</dt>
        <dd class="border border-white border-t-0 mb-4 p-1">{{ averageNumberOfRolls }}</dd>

        <dt class="border border-white mt-4 p-1">The highest number of rolls</dt>
        <dd class="border border-white border-t-0 mb-4 p-1">{{ highestNumberOfRolls }}</dd>

        <dt class="border border-white mt-4 p-1">The lowest number of rolls</dt>
        <dd class="border border-white border-t-0 mb-4 p-1">{{ lowestNumberOfRolls }}</dd>

        <dt class="border border-white mt-4 p-1">The most common roll/s</dt>
        <dd class="border border-white border-t-0 mb-4 p-1">
          <div v-for="([ roll ], index) in mostCommonRoll" :key="index">{{ roll.split(',').join(' &amp; ') }}</div>
        </dd>
      </dl>

      <p class="my-4">Your winning percentage is {{ winningPercentage }}%</p>
      <p>You won a total of {{ state.win }} {{ pluralise(state.win, 'game') }}</p>
      <p class="mb-4">You lost a total of {{ state.loss }} {{ pluralise(state.loss, 'game') }}</p>
    </template>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import Numbers from '../../js/util/Numbers'
import { pluralise } from '../../js/util/Strings'

const _ = new Numbers()

const state = reactive({
  isComplete: false,
  games: [],
  win: 0,
  loss: 0,
})

const averageNumberOfRolls = computed(() => {
  const totalNumberOfRolls = [...state.games].reduce((acc, game) => acc + game.length, 0)

  const average = totalNumberOfRolls / state.games.length 

  return isNaN(average) ? 0 : average
})

const highestNumberOfRolls = computed(() => {
  return [...state.games].reduce((acc, game) => {
    return game.length > acc ? game.length : acc
  }, 0)
})

const lowestNumberOfRolls = computed(() => {
  return [...state.games].reduce((acc, game) => {
    if(!acc) return game.length
    
    return game.length < acc ? game.length : acc
  }, 0)
})

const mostCommonRoll = computed(() => {
  const allRolls = [...state.games].flat(1)

  const frequency = allRolls.reduce((acc, roll) => {
    return acc[roll] ? ++acc[roll] : acc[roll] = 1, acc
  }, {})

  const descendingOrder = Object.entries(frequency).sort((a, b) =>  b[1] - a[1])

  if(!descendingOrder.length) {
    return []
  }

  const max = descendingOrder[0][1]
  return descendingOrder.filter((item) => item[1] === max)  
})

const winningPercentage = computed(() => {
  const percentage = state.win / [...state.games].length

  return isNaN(percentage) ? 0 : (percentage * 100)
})

function play(numberOfGames) {
  reset()

  for(let i = 0; i < numberOfGames; i++) {
    state.games[i] = []
    shootCraps(i)
  }

  state.isComplete = true
}

function reset() {
  state.isComplete = false
  state.games = []
  state.win = 0
  state.loss = 0
}

function rollDice() {
  const dice = [_.randomNumber(), _.randomNumber()]

  state.games[state.games.length-1] = [...state.games[state.games.length-1], dice]

  return _.sum(dice)
}

function shootCraps() {
  const tally = rollDice()

  switch(tally) {
    case 2:
    case 3:
    case 13:
      state.loss++
      break
    case 7:
    case 11:
      state.win++
      break
    default:
      state[jeopardy(tally) ? 'win' : 'loss']++
      break
  }
}

function jeopardy(points) {
  const tally = rollDice()

  if(tally === 7) {
    return false
  }
  else if(tally === points) {
    return true
  }

  return jeopardy(points)
}

defineExpose({
  play,
})
</script>
