<template>
  <PlayHeader />
  <GameHistory :games="store.state.playedGames" />
</template>

<script>
import { inject } from 'vue'
import GameHistory from '../components/GameHistory.vue'
import PlayHeader from '../components/PlayHeader.vue'

export default {
  name: 'Home',
  components: { GameHistory, PlayHeader },
  setup() {
    const store = inject('store')
    return { store }
  }
}
</script>
