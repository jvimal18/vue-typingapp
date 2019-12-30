<template>
  <div class="timer" id="timer" :class="{red: danger, light: toggle, dark: !toggle}" > 
      <span>{{ counter }}</span></div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// var moment = require('moment');

export default {
    name: 'timer',
    data() {
        return {
            counter: null,
            danger: false,
            toggle: true,
        }
    },
    computed: {
        ...mapGetters(['getQuoteLength', 'getlevel', 'getGameLive']),
        createdTime() {
            return this.$store.state.Quotes.startTime
        },
    },
    watch: {
        getQuoteLength() {
            this.updateTimer()
        }
    },
    methods: {
        ...mapActions(['resetGame']),
        updateTimer() {
            this.counter = Math.floor( this.getQuoteLength / parseInt(this.getlevel) )
        }
    },
    mounted() {
        this.updateTimer()
        this.interval = setInterval(() => {
            console.log(this.counter)
            if ( this.counter !== null) { 
                this.counter = this.counter-1
                this.prevCounter = this.counter
                this.toggle = !this.toggle
                if (this.counter > 10){
                    this.danger = false
                } else if ( this.counter >= 1 && this.counter <= 10){
                    this.danger = true
                } else if ( this.counter <= 0 ) {
                    this.resetGame()
                }
            }
        }, 1000);
    },
    beforeDestroy() {
        clearInterval(this.interval)
    }
}
</script>

<style scoped>
.timer {
    position: relative;
    text-align: center;
    align-items: center;
    font-size: 3rem;
    font-weight: bold;
    margin: 1rem auto 1rem auto;
    width: 8rem;
    height: 8rem;
    border-radius: 100%;
    padding: 2rem 0rem;
    border: 1px solid #0288D1;
    transition-duration: .5s
}

.timer.light {
    background-color:#0288D1;
    /* box-shadow: 4px 4px 18px 5px rgba(0,0,0,0.75); */
    box-shadow: 2px 2px 12px 3px rgba(0,0,0,0.75);
    color: #ffffff;
}

.timer.dark {
    background-color:#90CAF9;
}

.timer.red {
    color: red;
    box-shadow: 2px 2px 12px 3px red;
    border: unset;
}

.timer.red.light {
    color: red;
    background-color: #ffffff;
    box-shadow: 2px 2px 12px 3px red;
}

.timer.red.dark {
    color: #ffffff;
    background-color: red;
    box-shadow: 2px 2px 12px 3px red;
}
</style>