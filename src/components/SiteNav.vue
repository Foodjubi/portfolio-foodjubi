<script setup>
const liens = [
  { nom: "Accueil", cible: "/#accueil" },
  { nom: "Competences", cible: "/#competences" },
  { nom: "Parcours", cible: "/#parcours" },
  { nom: "Projets", cible: "/#projets" },
  { nom: "Contact", cible: "/#contact" }
]
</script>
<template>
  <nav class="site-nav" aria-label="Navigation principale">
    <RouterLink class="brand" to="/#accueil">Julien</RouterLink>
    <div class="nav-links">
      <RouterLink v-for="lien in liens" :key="lien.cible" :to="lien.cible">
        {{ lien.nom }}
      </RouterLink>
    </div>
  </nav>
</template>


<style scoped>

</style>