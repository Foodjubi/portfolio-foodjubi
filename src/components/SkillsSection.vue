<script setup>
const groupes = [
  {
    nom: "Apprentissage actuel",
    detail: "Avec un professeur et en autonomie progressive",
    elements: ["Java", "NeoForge", "Git et GitHub"]
  },
  {
    nom: 'Expériences passées à réactualiser',
    detail: 'Technologies déjà explorées dans mes anciens projets',
    elements: ['Python', 'discord.py', 'Spigot / Bukkit', 'HTML', 'CSS', 'JavaScript', 'React', 'Vue.js']
  }
]
</script>

<template>
  <section id="competences" class="content-panel">
    <div class="section-heading">
      <p class="eyebrow">MON PARCOURS</p>
      <h2>Compétences & Apprentissage</h2>
      <p>Je distingue mes travaux actuels de mes expériences passées.</p>
    </div>

    <div class="skills-grid">
      <article v-for="groupe in groupes" :key="groupe.nom" 	class="skill-card">
        <h3>{{groupe.nom}}</h3>
        <p class="skill-detail">{{groupe.detail}}</p>
        <ul class="skill-tags">
          <li v-for="item in groupe.elements" :key="item">
            {{item}}
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<style scoped>

</style>