<template>
  <div class="report" id="report">
      <div class="score"><span>SCORE : </span>{{ getScore }}</div>
      <!-- <div class="correct"><span>Correctly Typed : </span><span class="green">{{getCorrectTypeCount}}</span></div>
      <div class="mistakes"><span>Wrongly Typed : </span><span class="red">{{getWrongTypeCount}}</span></div> -->
      
      <div id="progressBar">
          <div id="correctBar" :style="correct"></div>
          <div id="wrongBar" :style="incorrect"></div>
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'report',
    // data() {
    //     return {
    //         getCorrectTypeCount: 30,
    //         getWrongTypeCount: 70,
    //         getScore: 2
    //     }
    // },
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

#progressBar {
  width: 90%;
  margin: 10px auto;
}

#correctBar, #wrongBar {
    display: inline-block;
    height: 8px;
}

#correctBar {
    background-color:rgb(2, 209, 106);
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}

#wrongBar {
    background-color:#CB4335;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}

.report {
    background-color: rgba(44, 62, 80, .3);
    widows: 90%;
    margin: 10px auto;
    text-align: center;
    font-size: 2rem;
    padding: 1rem;
}

</style>