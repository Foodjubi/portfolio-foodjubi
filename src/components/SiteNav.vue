<script setup>
const liens = [
  {nom: "Accueil", cible: "#accueil"},
  {nom: "Compétences", cible: "#competences"},
  {nom: "Projets", cible: "#projets"},
  {nom: "Contact", cible: "#contact"}

]
</script>

<template>
  <nav class="site-nav" aria-label="Navigation principale">
    <a class="brand" href="#accuil">Julien</a>

    <div class="nav-links">
      <a v-for="lien in liens" :key="lien.cible" :href="lien.cible">
        {{lien.nom}}
      </a>
    </div>
  </nav>
</template>

<style scoped>

</style>