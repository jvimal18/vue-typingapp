const RANDOM_QUOTE_API_URL = 'http://quotes.stormconsultancy.co.uk/random.json'

const state = {
    currentQuoteRes: {
        author: "",
        id: 0,
        quote: "",
        permalink: "",
      },
    lifePoint: 20,
    quoteLength: 0,
    startGame: false,
    score: 0,
    startTime: new Date(),
    quoteHtmlElement: HTMLElement,
    level: 1,
    wrongTypeCount: 0,
    correctTypeCount: 0
}

const getters = {
  currentQuoteRes: (state) => state.currentQuoteRes,
  getQuoteLength: (state) => state.quoteLength,
  getcurrentQuote: (state) => state.currentQuoteRes.quote,
  getQuoteHtmlElement: (state) => state.quoteHtmlElement,
  getScore: (state) => state.score,
  getlevel: (state) => state.level,
  getCorrectTypeCount: (state) => state.correctTypeCount,
  getWrongTypeCount: (state) => state.wrongTypeCount,
  getLifePoint: (state) => state.lifePoint
}

const actions = {
  async fetchQuote({ commit }) {
    await fetch(RANDOM_QUOTE_API_URL)
      .then(res => {
          if (res.ok) {
              res.json().then( data => { 
                  commit( 'setcurrentQuoteRes', data ) // commit data -> commit (<mutation func name>, <data>) 
                  commit( 'setQuoteLength', data.quote.length)
                })
          } else {
              console.log('Error')
          }
      })
  },
  resetTimer({commit}) {
    commit('setStartTime', new Date())
  },  

  resetGame({ commit, dispatch }, flag=true) {
    if (flag) { dispatch('fetchQuote') }
    commit('setScore', 0)
    commit('setStartTime', new Date())
  },
  endGame({commit, dispatch}) {
    // dispatch('resetGame', false)
    dispatch('resetGame')
    commit('setStartGame', false)
  }
}

const mutations = {
  setcurrentQuoteRes: (state, data) => { state.currentQuoteRes = data },
  setStartGame: (state, data) => { state.startGame = data },
  setScore: (state, data) => { state.score = data },
  setStartTime: (state, data) => { state.startTime = data },
  setQuoteLength: (state, length) => { state.quoteLength = length },
  setQuoteHTMLElement: (state, element) => { state.quoteHtmlElement = element },
  setlevel: (state, level) => {state.level = level},
  setWrongTypeCount: (state, value) => {state.wrongTypeCount = value},
  setCorrectTypeCount: (state, value) => {state.correctTypeCount = value },
  setLifePoint: (state, value) => { state.lifePoint = value}
}


export default {
  state,
  getters,
  actions,
  mutations
}