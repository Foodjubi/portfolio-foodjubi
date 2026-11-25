<script setup>
import {ref} from "vue";
import { computed} from "vue";

defineProps({
  project: {type: Object, required: true},
})

const imageUrl = computed(() => {
  `${import.meta.env.BASE_URL}projects/${props.project.image}`
})

const fallbackUrl = `${import.meta.env.BASE_URL}projects/placeholder.svg`

function imageManquante(event){
  if(!event.target.src.endsWith("placeholder.svg")){
    event.target.src = fallbackUrl
  }
}

const favori = ref(false)
</script>

<template>
  <RouterLink :to="{name: 'projects', params: {slug: project.slug}}" :aria-label="`Découvrir le projet ${project.title}`">
    <article class="project-card v2-card">
      <img class="project-cover" :src="imageUrl" :alt="`Capture du projet ${project.title}`" loading="lazy" @error="imageManquante"/>
      <div class="project-card-body">
        <span class="project-status" :class="{ 'is-current': project.status === 'En cours' }">
          {{project.status}}
        </span>
        <h3>{{project.title}}</h3>
        <p class="project-techno">{{project.techno}}</p>
        <p class="project-description">{{project.description}}</p>
        <span class="project-discover">Découvrir ce projet -> </span>
      </div>
    </article>
  </RouterLink>
</template>

<style scoped>
</style>
