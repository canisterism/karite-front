import Vuex from 'vuex';

const store = {
  state: {
    books: []
  },
  getters: {
    books: state => state.books
  },
  mutations: {
    setBooks(state, { books }) {
      state.books = books;
    }
  },
};

export default () => new Vuex.Store(store);
