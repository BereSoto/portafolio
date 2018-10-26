<template>
  <main id="app">
    <section class="hero is-white is-bold is-medium">
      <div class="hero-head">
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <a href="#acerca-de-mi" class="navbar-item is-active">
              Acerca de mi
            </a>
            <a href="#habilidades" class="navbar-item">
              Habilidades
            </a>
            <a href="#portafolio" class="navbar-item">
              Portafolio
            </a>
            <a href="#contacto" class="navbar-item">
              Contacto
            </a>


          </div>
        </div>

      </div>
      <div class="hero-body">

        <div class="container has-text-centered">
          <img class="image is-inline-block" src="/img/yo.jpg" alt="">
          <h1 class="title is-1  util-space__top--2x">Montserrat Berenice Soto Fermín</h1>
          <h2 class="subtitle is-2">UX / UI Developer</h2>
        </div>
      </div>

    </section>
    <section id="acerca-de-mi" class="section section-tec ">
      <h3 class="title is-1 has-text-centered has-text-white">Acerca de mi</h3>
      <div class="columns is-centered">
        <div class="column is-6 col-gray is-3 ">
        <p class="is-size-3"> Me encanta la tecnología y lo que puedo aprender con ella.
          Soy apasionada de las artes y la buena literatura,
         mi meta es seguir desarrodandome en el mundo
          tech, y sobretodo en la experiencia del usuario.
         Actualmente me encuentro laborando para Dinamo, una agencia
         de comunicación y diseño. Mi principal labor es
         la creación de landing pages y sitios web.</p>
        </div>

      </div>

    </section>
    <section id="habilidades" class="section  ">
      <h3 class="title is-1 has-text-centered  ">Habilidades</h3>
      <div class="columns has-text-centered box-black">
        <div class="column  is-6">
          <h4 class="is-size-2  util-space__bot--2x">Técnicas</h4>
          <div class="level util-space__top--3x">
            <div class="level-item">
              <img class="svg-logos" src="@/assets/images/sketch.svg" alt="Sketch">
            </div>
            <div class="level-item">
              <img class="svg-logos" src="@/assets/images/materialize.svg" alt="Materialize">
            </div>
            <div class="level-item">
              <img class="svg-logos" src="@/assets/images/git.svg" alt="Git">
            </div>
            <div class="level-item">
              <img class="svg-logos" src="@/assets/images/vue.svg" alt="Vue">
            </div>
            <div class="level-item">
              <img class="svg-logos" src="@/assets/images/html.svg" alt="HTML5">
            </div>
          </div>
          <div class="level">
            <div class="level-item util-space__top--3x">
              <img class="svg-logos" src="@/assets/images/css.svg" alt="CSS3">
            </div>
            <div class="level-item">
              <img class="svg-logos" src="@/assets/images/sass.svg" alt="SASS">
            </div>
            <div class="level-item">
              <img class="svg-logos" src="@/assets/images/bulma.png" alt="Bulma">
            </div>
            <div class="level-item">
              <img class="svg-logos" src="@/assets/images/nodejs.svg" alt="Node JS">
            </div>
          </div>
        </div>
        <div class="column is-6 has-text-rigth">
          <h4 class="is-size-2">Blandas</h4>
          <ul class="is-size-3 util-space__top--2x ">
            <li>Autodidacta</li>
            <li>Solución de conflictos</li>
            <li>Trabajo en equipo</li>
            <li>Comunicación acertiva</li>
                </ul>


        </div>

      </div>
    </section>
    <section id="portafolio" class="section section-tec has-text-centered ">
      <h5 class="title is-1 has-text-white">Portafolio</h5>
      <div class="columns util-space__top--3x">
        <div class="column col-gray is-4">
          <h4 class="subtitle is-3">Applove</h4>
          <img  class ="picture util-space__top--2x" src="/img/applove.png" alt="applove">
          <a target="__blank" href="https://beresoto.github.io/applove/"><p class="is-size-4 util-space__top--2x">Ejercicio Laboratoria</p></a>

        </div>
        <div class="column col-gray is-4">
          <h4 class="subtitle is-3">Blog Platzi</h4>
          <img  class ="picture util-space__top--2x" src="/img/blog.png" alt="blog">
          <a target="__blank" href="https://beresoto.github.io/blog-platzi/"><p class="is-size-4 util-space__top--2x">Replica del blog de Platzi</p></a>

        </div>
        <div class="column col-gray is-4 ">
          <h4 class="subtitle is-3">Sumerhills</h4>
          <img  class ="picture util-space__top--2x" src="/img/sumer.png" alt="summer">
          <a target="__blank" href="https://summerhills.com.mx/"><p class="is-size-4 util-space__top--2x">Trabajo de agencia</p></a>

        </div>
        </div>

    </section>
    <section id="contacto" class="section ">
      <h5 class="title is-1 has-text-centered">Contáctame</h5>
      <div class="social has-text-centered ">

       <a target="__blank" class="icon is-medium has-text-black" href="https://twitter.com/Beremusa"><i class="fab fa-twitter fa-2x"> </i></a>
       <a target="__blank" class="icon is-medium has-text-black" href="https://www.facebook.com/Scara.Musa?ref=bookmarks"><i class="fab fa-facebook-square fa-2x"> </i></a>
       <a  target="__blank" class="icon is-medium has-text-black" href="https://github.com/BereSoto"><i class="fab fa-github fa-2x"> </i></a>
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

.svg-logos {
  height: 3rem;
  width: 3rem;
}

.image {
  height: 270px;
  width: 210px;
  border-radius: 100%;
}
.section-tec{
  background:#863588;
}

.picture{
  height: 280px;
  width: 500px;
}
.icon{
  margin-right: 15px;

}

.pic{
  height: 100px;
  width: 100px;
}

.col-gray{
  background: #F0EFFA ;

}


</style>
