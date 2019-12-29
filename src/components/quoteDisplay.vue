<template>
    <div class="container">
        <div class="header">
            <div class="auther-name" id="authorName">
                Author: {{ author }} 
                <span class="word-count"><span>Word Count : </span>{{ getQuoteLength }}</span>
            </div>
        </div>
        <div id="quoteDisplay" class="quote-display"> 
            <span v-for="(letter, idx) in currentQuote" :key=idx :id="idx">{{ letter }}</span>
        </div>
        <inputAreaVue></inputAreaVue>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import inputAreaVue from './inputArea.vue'

export default {
    name: 'quoteDisplay',
    components: {
        inputAreaVue,
    },
    computed: {
        ...mapGetters(['currentQuoteRes', 'getQuoteLength']),
        
        currentQuote() {
            return this.currentQuoteRes.quote
        },
        author() {
            return this.currentQuoteRes.author
        }
    },
    data() {
        return {
              displayQuoteElement: HTMLElement
        }
    },
    mounted() {
        this.$store.commit('setQuoteHTMLElement', this.$el.querySelector('#quoteDisplay'))
    },
    methods: {
    },
    created() {
    }
}
</script>

<style scoped>
.container {
  display: relative;
  padding: 1rem;
  border-radius: .5rem;
  background-color:#90CAF9;
  border: 1px solid #0288D1;
  margin: 0 auto;
}

.word-count {
    float: right;
}

.word-count > span {
    font-weight: normal;
}

.quote-display, .auther-name{
  margin-bottom: 1rem;
  margin-left: calc(1rem + 2px);
  margin-right: calc(1rem + 2px);
}

.auther-name {
    text-transform: uppercase;
    font-weight: bold;
}

.valid {
    color: green;
}

.invalid {
    color: red;
    text-decoration: underline;
}
</style>