<script setup>
import {ref} from "vue";

defineProps({
  title: {type: String, required: true},
  techno: {type: String, required: true},
  description: {type: String, required: true},
  status : {type: String, default: "Ancien Projet"},
  url: {type: String, default: ""}
})

const favori = ref(false)
</script>

<template>
<article class="project-card">
  <div class="project-card-top">
    <span class="project-status" :class="{'is-current': status === 'En cours'}">
      {{status}}
    </span>
    <h3>{{title}}</h3>
    <p class="project-techno">{{techno}}</p>
    <p class="project-description">{{description}}</p>
    <a v-if=url class="project-link" href=url target="_blank" rel="noopener noreferrer">
      Voir le code sur github
    </a>
    <span v-else class="project-no-link">
      Archive personnelle
    </span>

    <button type="button" class="favorite-button" :aria-pressed="favori" @click="favori = !favori">
      {{favori ? "* Favori" : "☆ Ajouter aux favoris"}}
    </button>
  </div>
</article>
</template>

<style scoped>
</style>