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
    <section class="section section-tec has-text-white">
      <h3 class="title is-1 has-text-centered has-text-white ">Habilidades</h3>
      <div class="columns has-text-centered box-black">
        <div class="column is-6">
          <h4 class="is-size-3 ">Tecnicas</h4>
            <span class="icon">
              <i class="fab fa-github" aria-hidden="true"></i>
            </span>
            <span class="icon">
              <i class="fab fa-html5" aria-hidden="true"></i>
            </span>
            <span class="icon">
              <i class="fab fa-css3-alt" aria-hidden="true"></i>
            </span>
            <span class="icon">
              <i class="fab fa-css3-alt" aria-hidden="true"></i>
            </span>
        </div>
        <div class="column is-6">
          <h4 class="is-size-3">Blandas</h4>

        </div>

      </div>
    </section>
    <section class="section has-text-centered">
      <h5 class="title is-1">Portafolio</h5>
      <div class="columns">
        <div class="column is-4">
          <h4 class="is-size-4">Blog Platzi</h4>
          <p>Replica del blog de Platzi</p>
        </div>
        <div class="column is-4">
          <h4 class="is-size-4">Invi guitar</h4>
          <p>Sitio de venta de guitarras</p>
        </div>
        <div class="column is-4">
          <h4 class="is-size-4">Blog Platzi</h4>
          <p>Replica del blog de Platzi</p>
        </div>
        <div class="column is-4">

          <h4 class="is-size-4">Sumerhills</h4>
          <p>Trabajo de Agencia</p>

        </div>

      </div>

    </section>
    <section class="section section-tec has-text-white ">
      <h5 class="title is-1 has-text-white has-text-centered">Contactame</h5>
      <div class="social has-text-centered">
       <a href="https://twitter.com/Beremusa"><i class="fab fa-twitter"> </i></a>
       <a href="https://www.facebook.com/Scara.Musa?ref=bookmarks"><i class="fab fa-facebook-square"> </i></a>
       <a href="https://github.com/BereSoto"><i class="fab fa-github"> </i></a>

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
.section-tec{
  background:#863588;
}


</style>
