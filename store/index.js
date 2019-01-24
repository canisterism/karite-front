// const createStore = () => {
//   return new Vuex.Store({
//     state: () => ({
//       books: []
//     }),
//     mutations: {
//       searchResult(state, books) {
//         state.books = books;
//       }
//     }
//   })
// }

// export default createStore

import Vuex from 'vuex'

const state = () => ({
  books: []
})

const mutations = {
  searchResult(state, books) {
    state.books = books;
  }
}

const store = () => new Store({
  state,
  mutations
})

export default store
