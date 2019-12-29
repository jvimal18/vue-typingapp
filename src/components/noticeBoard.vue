<template>
  <div class="notice-board" id="noticeBoard">
      <div class="header"> SCORE Card </div>
      <div class="score"><span>SCORE : </span>{{ getScore }}</div>
      <div class="life"><span>Life Points : </span><span class="green">{{ getLifePoint }}</span></div>
      <div class="word-counter" id="wordCounter">
        <!-- <div class="sub-section">Word Count</div> -->
        <div class="correct"><span>Typed Like A Charm : </span><span class="green">{{getCorrectTypeCount}}</span></div>
        <div class="mistakes"><span>Worngly Typed : </span><span class="red">{{getWrongTypeCount}}</span></div>
      </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {    
    name: 'noticeBoard',
    data() {
        return {
            pointReduceFlag: 0
        }
    },
    computed: {
        ...mapGetters(['getScore', 'getCorrectTypeCount', 'getWrongTypeCount', 'getLifePoint']),
    },
    watch: {
        getWrongTypeCount() {
            this.pointReduceFlag++
            if(this.pointReduceFlag >= 50 ){
                this.setLifePoint(this.getLifePoint-1)
                this.pointReduceFlag = 0
            }
        }
    },
    methods: {
        ...mapMutations(['setLifePoint'])
    }
}
</script>

<style scoped>

.notice-board {
    float: left;
    min-height: 85vh;
    background-color:rgba(214, 219, 223, 0.75);
    font-size: 2rem;
    width: 100%;
    padding: 5px;
}

.header {
    font-weight: bold;
    text-align: center;
    background-color:rgba(214, 219, 223, 0.75);
    margin-bottom: 1rem;
    padding: 20px;
}

.score {
    margin-top: 10px;
    font-weight: bold;
    opacity: unset;
    border-bottom: .5px solid black;
}

.word-counter {
    font-size: 1.5rem;
    margin-top: .5rem;
}

.sub-section {
    font-size: 2rem;
    border-bottom: .5px solid black;
}

.correct, .mistake {
    margin: .25rem 0;
}

.red {
    color: red;
}

.green{
    color: green
}
</style>