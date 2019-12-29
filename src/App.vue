<template>
  <div id="app">
    
    <header>
      <div class="title"><span class="title-highlight">T</span>ypeSpeed<span class="title-highlight">++</span></div>
    </header>

    <toolbar></toolbar>
    <timer v-if="isGameStarted"></timer>
    <quoteDisplay v-if="isGameStarted"></quoteDisplay>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import toolbar from './components/toolkit.vue'
import quoteDisplay from './components/quoteDisplay.vue'
import timer from './components/timer.vue';

export default {
  name: 'app',
  components: {
    quoteDisplay,
    timer,
    toolbar
  },
  computed: {
    isGameStarted: {
      get () {
          return this.$store.state.Quotes.startGame
      },
      set(value) {
          this.$store.commit('setStartGame', value)
      }
    }
  },
  methods: {
    ...mapActions(['fetchQuote']),
  },
  Created() {
    // 
  },
  mounted() {
    this.fetchQuote()
  }
}
</script>

<style>

* {
  box-sizing: border-box;
}

#app {
  margin: 1rem 1rem;
}

header {
  font-size: 2rem;
  font-weight: bold;
  height: 4rem;
}

body {
  min-height: 100vh;
  max-width: 100%;
  margin: 0;
  background-image: url('./assets/bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}

.title-highlight {
  color: red;
}
</style>
