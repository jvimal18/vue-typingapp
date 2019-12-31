<template>
    <div id="progressBar">
        <div id="correctBar" :style="correct"></div>
        <div id="wrongBar" :style="incorrect"></div>
    </div>  
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'progressBar',
    
    computed: {
        ...mapGetters(['getCorrectTypeCount', 'getWrongTypeCount']),
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

<style scoped>
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
</style>