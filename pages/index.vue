<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">karite-front</h1>
      <h2 class="subtitle">frontend for karite</h2>
      <div class="field">
        <div class="control content">
          <input
            class="input is-primary"
            type="text"
            placeholder="type title of a book you wanna read"
            v-model="searchWord"
          >
        </div>
        <!-- <a href class="button is-info" @click="searchByTitle">Search book!</a> -->
      </div>
      <div class>
        <div class="content card" v-for="book in books">{{book.title}}</div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Logo from "~/components/Logo.vue";
import throttle from "lodash/throttle";

const BOOKS_SEARCH_URL = "http://localhost:3000/books/search?title=";

export default {
  asyncData() {},
  components: {
    Logo
  },
  data: function() {
    return {
      searchWord: "",
      books: []
    };
  },
  created: function() {
    this.searchBookWithInterval = throttle(this.searchBookByTitle, 1000);
  },
  watch: {
    searchWord: function() {
      this.searchBookWithInterval();
    }
  },
  methods: {
    searchBookByTitle: function() {
      if (this.searchWord === "") {
        return;
      }
      Promise.resolve(axios.get(BOOKS_SEARCH_URL + this.searchWord))
        .then(res => {
          this.books = res.data;
        })
        .catch(console.error);
    }
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
