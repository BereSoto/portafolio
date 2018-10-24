<template>
  <main id="app">
    <section class="hero is-white is-bold is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <img class="image is-inline-block" src="/img/yo.jpg" alt="">
          <h1 class="title is-1">Montserrat Berenice Soto Fermín</h1>
          <h2>Chacha</h2>
        </div>
      </div>

    </section>
    <section class="section">
      <h3 class="title is-1">Habilidades</h3>
      <div class="colums">
        <div class="column is-6">
          <h4>Tecnicas</h4>

        </div>

      </div>
    </section>
  </main>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
@import "./assets/sass/app.scss";
@import "./assets/sass/global.scss";

.image {
  height: 250px;
  width: 210px;
  border-radius: 100%;
}
</style>
