<template>
  <div class="report" id="report">
      <div class="score"><span>SCORE : </span>{{ getScore }}</div>
      <!-- <div class="correct"><span>Correctly Typed : </span><span class="green">{{getCorrectTypeCount}}</span></div>
      <div class="mistakes"><span>Wrongly Typed : </span><span class="red">{{getWrongTypeCount}}</span></div> -->
      
      <progressBar></progressBar>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import progressBar from './progressBar'

export default {
    name: 'report',
    components: {
        progressBar
    },
    computed: {
        ...mapGetters(['getScore', 'getCorrectTypeCount', 'getWrongTypeCount']),
        correct() {
            let percent = (this.getCorrectTypeCount/(this.getCorrectTypeCount + this.getWrongTypeCount))*100
            return { width: `${percent}%` }
        },
        incorrect() {
            let percent =  (this.getWrongTypeCount/(this.getCorrectTypeCount + this.getWrongTypeCount))*100
            return { width: `${percent}%` }
        }
    },
}
</script>

<style sccoped>

.report {
    background-color: rgba(44, 62, 80, .3);
    widows: 90%;
    margin: 10px auto;
    text-align: center;
    font-size: 2rem;
    padding: 1rem;
}

</style>