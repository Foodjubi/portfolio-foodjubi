<script setup>
const groupes = [
  {
    nom: "Apprentissage Actuel",
    detail: "Avec un professeur et en autonomie progressive",
    elements: ["Java", "NeoForge", "Git et Github"]
  },
  {
    nom: 'Expériences passées à réactualiser',
    detail: 'Technologies déjà explorées dans mes anciens projets',
    elements: ['Python', 'discord.py', 'Spigot / Bukkit', 'HTML', 'CSS', 'JavaScript', 'React', 'Vue']
  }
]
</script>

<template>
  <section id="competences" class="content-panel">
    <div class="section-heading">
      <p class="eyebrown">MON PARCOURS</p>
      <h2>Compétences & Apprentissage</h2>
      <p>Je distingue mes travaux actuel de mes expériences passées.</p>
    </div>

    <div class="skills-grid">
      <article v-for="groupe in groupes" :key="groupe.nom" class="skills-card">
        <h3>{{groupe.nom}}</h3>
        <p class="skills-details">{{groupe.detail}}</p>
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