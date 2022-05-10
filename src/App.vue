<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Vuelog</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/"
              >메인 페이지</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/list">글 내용</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/detail">세부내용</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="mt-4">
    <router-view :blogle="blogle"></router-view>
  </div>
</template>



<script>
import blogle from "./assets/blog.js";

export default {
  name: "App",
  data() {
    return {
      blogle: blogle,
    };
  },

  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
