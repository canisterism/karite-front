<template>
  <div class="SearchedBooks">
    <div>
      <div class="content card" v-for="book in books">
        {{book.title}}
        <figure class="book-cover image is-128x128">
          <img :src="book.cover" alt="cover">
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SearchedBooks",
  computed: { ...mapGetters(["books"]) }
};
</script>

<style scoped>
.SearchedBooks {
  margin: 20px;
}
.book-cover > img {
  height: 90%;
  width: 70%;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
}
</style>
