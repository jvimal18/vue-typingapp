import Vue from 'vue'
import Vuex from 'vuex'
import Quotes from './modules/Quotes'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
  },
  mutations: {
    initialiseStore(state) {
			// Check if the ID exists
			if(localStorage.getItem('store')) {
				// Replace the state object with the stored item
				this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('store')))
        );
        console.log(state)
      }
    }
  },
  actions: {
  },
  modules: {
    Quotes
  }
})

// store.subscribe((mutation, state) => {
//     localStorage.setItem('store', JSON.stringify(state));
// });

// Save store to local Store on every Change
// store.subscribe((mutation, state) => {
// 	localStorage.setItem('store', JSON.stringify(state));
// });
