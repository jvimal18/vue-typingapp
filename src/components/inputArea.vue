<template>
    <textarea v-model="inputData" class="quote-input" @keyup="validatekeypress" @input="validateInput"></textarea>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'inputArea',
  data() {
    return {
      inputData: ''
    }
  },
  computed: {
    ...mapGetters(['getcurrentQuote', 'getQuoteHtmlElement', 'getScore', 'getCorrectTypeCount', 'getWrongTypeCount'])
  },
  watch: {
    getcurrentQuote() {
      this.inputData = ''
      this.resetSpanClass()
    }
  },
  methods: {
    ...mapActions(['fetchQuote', 'resetTimer']),
    ...mapMutations(['setWrongTypeCount', 'setCorrectTypeCount']),
    resetSpanClass() {
      if ( this.inputData.length === 0 ) {
        const arrayQuote = this.getQuoteHtmlElement.querySelectorAll('span')
        arrayQuote.forEach(characterSpan => {
          characterSpan.classList.remove('invalid')
          characterSpan.classList.remove('valid')
        })
      }
        return 
    },
    nextQuote() {
      this.fetchQuote()
      this.resetTimer()
    },
    validatekeypress() {
      let len = this.inputData.length
      if (this.getcurrentQuote[len-1] === this.inputData[len-1]) {
        this.setCorrectTypeCount(this.getCorrectTypeCount + 1)
      } else {
        this.setWrongTypeCount(this.getWrongTypeCount + 1)
      }
    },
    validateInput() {
      this.resetSpanClass()
      const arrayQuote = this.getQuoteHtmlElement.querySelectorAll('span')
      const arrayValue = this.inputData.split('')

      arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index]
        if ( ! character ){
          characterSpan.classList.remove('invalid')
          characterSpan.classList.remove('valid')
        } else if (characterSpan.innerText === character ) {
          characterSpan.classList.remove('invalid')
          characterSpan.classList.add('valid')
        } else if (characterSpan.innerText !== character ) {
          characterSpan.classList.remove('valid')
          characterSpan.classList.add('invalid')
        }
      })

      if ( this.inputData === this.getcurrentQuote) {
        this.$store.commit('setScore', this.getScore+1)
        this.nextQuote()
      }

    }
  }
}
</script>

<style scoped>
.quote-input {
  background-color: transparent;
  border: 1px solid #0288D1;
  outline: none;
  width: 100%;
  height: 8rem;
  margin: auto;
  resize: none;
  padding: .5rem 1rem;
  font-size: 1rem;
  border-radius: .5rem;
}

textarea {
  font-family: 'Roboto Condensed', sans-serif;
}
</style>