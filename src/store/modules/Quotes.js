const RANDOM_QUOTE_API_URL = 'http://quotes.stormconsultancy.co.uk/random.json'

const state = {
    gameLive: false,
    level: 1,
    lifePoint: 20,
    score: 0,

    // Quote Data
    currentQuoteRes: {
        author: "",
        id: 0,
        quote: "",
        permalink: "",
      },
    quoteLength: 0,
    quoteHtmlElement: HTMLElement,

    // Validating Keyup
    wrongTypeCount: 0,
    correctTypeCount: 0,
    showReport: false
}

const getters = {
  getGameLive: (state) => state.gameLive,
  getScore: (state) => state.score,
  currentQuoteRes: (state) => state.currentQuoteRes,
  getQuoteLength: (state) => state.quoteLength,
  getcurrentQuote: (state) => state.currentQuoteRes.quote,
  getQuoteHtmlElement: (state) => state.quoteHtmlElement,
  getlevel: (state) => state.level,
  getCorrectTypeCount: (state) => state.correctTypeCount,
  getWrongTypeCount: (state) => state.wrongTypeCount,
  getLifePoint: (state) => state.lifePoint,
  getshowReport: (state) => state.showReport,
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
  resetGame({ commit, dispatch }, flag=true) {
    if (flag) { dispatch('fetchQuote') }
    commit('setWrongTypeCount', 0)
    commit('setCorrectTypeCount', 0)
    commit('setScore', 0)
    commit('setLifePoint', 20)
  },
  endGame({commit}) {
    commit('setGameLive', false)
  },
  resetAllDefaults({commit, dispatch}) {
    dispatch('fetchQuote')
    commit('setScore', 0)
    commit('setStartTime', new Date)
    commit('setlevel', 1)
    commit('setWrongTypeCount', 0)
    commit('setCorrectTypeCount', 0)
    commit('setLifePoint', 20)
  },
}

const mutations = {
  setGameLive: (state, bool) => {state.gameLive = bool},
  setcurrentQuoteRes: (state, data) => { state.currentQuoteRes = data },
  setScore: (state, data) => { state.score = data },
  setStartTime: (state, data) => { state.startTime = data },
  setQuoteLength: (state, length) => { state.quoteLength = length },
  setQuoteHTMLElement: (state, element) => { state.quoteHtmlElement = element },
  setlevel: (state, level) => {state.level = level},
  setWrongTypeCount: (state, value) => {state.wrongTypeCount = value},
  setCorrectTypeCount: (state, value) => {state.correctTypeCount = value },
  setLifePoint: (state, value) => { state.lifePoint = value},
  saveQuoteState: (state) => { localStorage.setItem('store', JSON.stringify(state)) },
  setShowReport: (state, bool) => {state.showReport= bool}
}


export default {
  state,
  getters,
  actions,
  mutations
}