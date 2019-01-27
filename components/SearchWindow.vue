<template>
  <div id="SearchWindow" class="column">
    <div class="field">
      <div class="control content">
        <input
          class="input is-primary"
          type="text"
          placeholder="type title of a book you wanna read"
          v-model="searchWord"
        >
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import axios from "~/plugins/axios";
import throttle from "lodash/throttle";

const SEARCH_PATH = "books/search/title/";

export default {
  name: "SearchWindow",
  data: function() {
    return {
      searchWord: ""
    };
  },
  created: function() {
    this.searchBooksWithInterval = throttle(this.searchBooks, 1000);
  },
  watch: {
    searchWord: function() {
      this.searchBooksWithInterval();
    }
  },
  methods: {
    searchBooks: function() {
      if (this.searchWord === "") {
        return;
      }
      Promise.resolve(axios.get(SEARCH_PATH + this.searchWord))
        .then(res => {
          let books = res.data;
          this.$store.commit("setBooks", { books });
        })
        .catch(console.error);
    }
  }
};
</script>
