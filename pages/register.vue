<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">Edmond</h1>
      <div>
        <h2 class="subtitle is-size-3">Search the Book!</h2>
        <div class="field">
          <div class="control content">
            <input class="input is-primary" type="text" placeholder="ピッしてね！" v-model="isbn">
          </div>
        </div>
      </div>
      <nuxt-link to="/">検索する</nuxt-link>
    </div>
  </section>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  data: function() {
    return {
      isbn: ""
    };
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
