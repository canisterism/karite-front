<template>
  <div id="SearchedBooks">
    <div class>
      <div class="content card" v-for="book in books">
        <div class="card-image">
          <figure class="image is-4by5">
            <img :src="book.cover" class="cover_image" alt="cover">
          </figure>
        </div>

        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{{book.title}}</p>
              <p class="subtitle is-6">{{book.author}}</p>
            </div>
          </div>

          <div class="content">
            <time>{{book.published}}</time>
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
</style>
