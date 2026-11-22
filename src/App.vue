<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
const salutation = "Salut c'ets foodjubi !!"
import {ref} from 'vue'
const compteur = ref(0)
function augmenter(){
  compteur.value++
}
</script>

<template>

  <main>
    <h1>Gaubert Julien</h1>
    <h2>Développeur en apprentissage</h2>
    <h3>Bonjour je m'appelle Gazubert Julien je suis pationné de developpement informatique depuis l'age de 12 ans je suis autodidacte blablabla!</h3>
    <a href="https://github.com/Foodjubi">GITHUB</a>
    <p>{{ salutation }}</p>
    <button @click="augmenter">Cliquer</button>
    <p>Nombre de clics : {{compteur}}</p>
    <p v-if="compteur > 0">Premier clic effectué !!</p>
  </main>
</template>

<style scoped>

button{
  background-color: var(--color-accent-dark);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 12px 18px;
  cursor: pointer;
  transition: background-color 0.2s ease;

}

button:hover {
  background-color: #483724;
}
button:focus-visible {
  outline: 3px solid var(--color-accent);
  outline-offset: 3px;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
