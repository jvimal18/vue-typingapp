<template>
    <div class="tool-bar" id="toolbar">

        <div class="start-button" v-if="! isGameStarted" @click="StartGame">
            START
        </div>

        <div class="action-bar" v-else>
            <div button class="reset" @click="resetGame">Reset</div>
            <div button class="skip" @click="skipQuote">Skip</div>
            <div button class="end" @click="endGame">End</div>
            <div select class="level-select">
                <select v-if="level" v-model="level">
                    <option disabled value="">select Levet</option>
                    <option value="1" default>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
        </div>

    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
    name: 'toolbar',
    computed: {
        ...mapGetters(['getlevel']),
        isGameStarted: {
            get () {
                return this.$store.state.Quotes.startGame
            },
            set(value) {
                this.$store.commit('setStartGame', value)
            },
        },
        level: {
            get() {
                return this.getlevel
            },
            set(value) {
                this.setlevel(value)
            }
        }
    },
    mounter() {
        
    },
    methods: {
        ...mapActions(['fetchQuote', 'resetGame', 'resetTimer', 'endGame']),
        ...mapMutations(['setlevel']),
        StartGame() {
            this.isGameStarted = true
            let time = new Date() 
            this.startTime = time.setSeconds(time.getSeconds() + 2)
        },
        skipQuote() {
            this.fetchQuote()
            this.resetTimer()
        }
    }
}
</script>

<style scoped>
.tool-bar{
    margin: 2rem auto;
    width: 700px;
    max-width: 90%;
}
.action-bar {
    margin: auto 0;
    text-align: center
}

.start-button {
  margin-bottom: 2rem;
  border: 1px solid #0288D1;
  background-color:#90CAF9;
  font-size: 1.2rem;
  padding: 1rem;
  width: 10rem;
  border-radius: 15px;
}

.start-button:hover {
  background-color: #0288D1;
  color: #ffffff;
}

.action-bar div[button] {
    margin-right: 1rem;
    border-radius: .2rem;
    outline: none;
    width: 5rem;
    height: 2rem;
    padding: 0.5rem 2rem;
}

.action-bar div[select] > select {
    height: 2.5rem;
    padding: 0.5rem;
}

.reset, .skip, .end, .level-select {
    display: inline;
}

.skip {
    border: 1px solid #9A7D0A;
    background-color:#F7DC6F;
}

.skip:hover {
    background-color: #9A7D0A;
    color: #ffffff;
}

.reset{
    border: 1px solid #0288D1;
    background-color:#90CAF9;
}

.reset:hover {
    background-color: #0288D1;
    color: #ffffff;
}

.end {
    border: 1px solid #CB4335;
    background-color:#EC7063;
}

.end:hover {
    background-color: #CB4335;
    color: #ffffff;
}

</style>