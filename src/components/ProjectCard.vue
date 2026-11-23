<script setup>
defineProps({
  title: {type: String, required: true},
  techno: {type: String, required: true},
  description: {type: String, required: true}
})
</script>

<template>
<article class="project-card">
  <h3>{{title}}</h3>
  <h3>{{techno}}</h3>
  <h3>{{description}}</h3>
</article>
</template>

<style scoped>
.project-card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
@media (max-width: 760px) {
  .project-card { grid-template-columns: 1fr; }
}
</style>