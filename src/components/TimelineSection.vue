<script setup>
import { parcours } from "@/data/timeline"

</script>

<template>
  <section id="parcours" class="content-panel">
    <p class="eyebrow">MON HISTOIRE AVEC LE CODE</p>
    <h2>Ma frise chronologique</h2>
    <p>Les années sont personnalisables : je renseigne les étapes vérifiées de mon parcours.</p>

    <ol class="timeline">
      <li v-for="etape in parcours" :key="etape.annee" class="timeline-item">
        <div class="timeline-dot" aria-hidden="true"></div>
        <div class="timeline-content">
          <span class="timeline-year">{{etape.annee}}}</span>
          <h3>{{etape.titre}}</h3>
          <p>{{etape.description}}</p>
        </div>
      </li>
    </ol>
  </section>
</template>

<style scoped>

</style>