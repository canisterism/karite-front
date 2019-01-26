<template>
  <div id="SearchedBooks">
    <div class="columns is-multiline">
      <div id="card" class="content card column is-4" v-for="book in books">
        <div class="card-image">
          <figure class="image">
            <img :src="book.cover" class="cover_image" alt="cover">
          </figure>
        </div>

        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="is-size-6">{{book.title}}</p>
              <p class="has-text-grey is-size-7">by {{book.author}}</p>
              <p class="has-text-grey is-size-7">{{book.pubdate}}</p>
            </div>
          </div>
        </div>

        <footer class="card-footer">
          <a class="card-footer-item" @click="onClickBorrow(book.title)">Borrow</a>
          <a class="card-footer-item" @click="onClickReturn(book.title)">Return</a>
          <a class="card-footer-item" @click="onClickDelete(book.title)">Delete</a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SearchedBooks",
  computed: { ...mapGetters(["books"]) },
  methods: {
    onClickBorrow: title => {
      alert("You borrowed " + title + " !");
    },
    onClickReturn: title => {
      alert("You returned " + title + " !");
    },
    onClickDelete: title => {
      alert("You deleted " + title + " !");
    }
  }
};
</script>

<style scoped>
#SearchedBooks {
  margin: 25px;
}

#card {
  padding: 10px;
}
</style>
