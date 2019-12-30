<template>
  <div id="app">
    
    <header>
      <div class="title"><span class="title-highlight">T</span>ypeSpeed<span class="title-highlight">++</span></div>
    </header>

    <div class=row>
      <div class="column left"><noticeBoard v-if="getGameLive"></noticeBoard></div>
      <div class="column middle">
        <timer v-if="getGameLive"></timer>
        <quoteDisplay v-if="getGameLive"></quoteDisplay>
        <toolbar></toolbar>
      </div>
      <div class="column right"><rules v-if="getGameLive" ></rules></div>
    </div>

    <!-- Mixin for common validations -->
    <!-- <validateGameEnd/> -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import toolbar from './components/toolkit.vue'
import quoteDisplay from './components/quoteDisplay.vue'
import timer from './components/timer.vue'
import noticeBoard from './components/noticeBoard.vue'
import rules from './components/rules'
// import validateGameEnd from './mixins/validateGameEnd'

export default {
  name: 'app',
  components: {
    quoteDisplay,
    timer,
    toolbar,
    noticeBoard,
    rules,
    // validateGameEnd
  },
  computed: {
    ...mapGetters(['getGameLive']),
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

/* Create three equal columns that floats next to each other */
.column {
  float: left;
  padding: 10px;
  height: 80vh; /* Should be removed. Only for demonstration */
}

.left, .right {
  width: 25%;
}

.middle {
  width: 50%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

#app {
  margin: 1rem 1rem;
  min-height: 95vh;
}

header {
  font-size: 2rem;
  font-weight: bold;
  height: 4rem;
  background-color: rgba(44, 62, 80, .3);
  padding: 12px;
}

body {
  min-height: 100vh;
  max-width: 100%;
  margin: 0;
  background-image: url('./assets/bg.jpg');
  font-family: 'Roboto Condensed', sans-serif;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  user-select: none;
}

.title-highlight {
  color: red;
}
</style>
