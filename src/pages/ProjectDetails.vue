<script setup>

import { computed } from "vue"
import { useRoute } from "vue-router"
import { projets } from "@/data/projects"

const route = useRoute()
const project = computed(() => projects.find((item) => item.slug === route.params.slug))

const fallbackUrl = `${import.meta.env.BASE_URL}projects/placeholder.svg`
const imageUrl = computed(() => project.value ? `${import.meta.env.BASE_URL}projects/${project.value.image}` : fallbackUrl)

function imageManquante(event){
  if(!event.target.src.endsWith("placeholder.svg")){
    event.target.src = fallbackUrl
  }
}

</script>

<template>

  <div class="detail-shell">
    <RouterLink to="/" class="back-link"> <- Retour aux projets</RouterLink>

    <main v-if="project" class="content-panel project-detail">
      <p class="eyebrow">FICHE PROJET</p>
      <span class="project-status">{{project.status}}</span>
      <h1>{{Project.title}}</h1>
      <p class="detail-techno">{{project.techno}}</p>

      <img class="detail-image" :src="imageUrl" :alt="`Capture du projet ${project.title}`"/>
      <p class="detail-lead">{{project.description}}</p>
      <h2>A propos du porjet</h2>
      <p>{{project.details}}</p>

      <h2>Compétences et technologies utilisées</h2>
      <ul class="detail-tags">
        <li v-for="skill in project.competences" :key="skill">{{skill}}</li>
      </ul>

      <h2>Fonctionnalitées</h2>
      <ul class="feature-list">
        <li v-for="feature in project.fonctionnalitées" :key="feature">{{feature}}</li>
      </ul>

      <a v-if="project.url" :href="project.url" target="_blank" rel="noopener noreferrer" class="button button-primary">
        Voir le code sur GitHub
      </a>
      <p v-else>Code non publié pour ce projet.</p>
    </main>
    <main v-else class="content-panel">
      <h1>Projet introuvable</h1>
      <p>Ce projet n'existe pas ou son adresse est incorrect</p>
    </main>
  </div>
</template>

<style scoped>

</style>