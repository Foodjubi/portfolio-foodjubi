<script setup>
import ProfilHeader from "@/components/ProfilHeader.vue";
import ProjectCard from "@/components/ProjectCard.vue";
</script>

<template>

  <main>
 <profil-header></profil-header>
    <ProjectCard title="MonPluginV2" description="Ancien plugin Minecraft : métiers, commandes, sauvegarde de données via JSON et YAML" techno="Java / Spigot"></ProjectCard>
    <ProjectCard title="SecurityBot" description="Ancien bot Discord : commandes, administration, sauvegarde de données via JSON, RPG" techno="Python / Discord.py"></ProjectCard>
    <ProjectCard title="Realms Of Eternity" description="Créeation en cour d'un mod Minecraft, objectif: créer un systeme rpg dans le jeu" techno="Java / NeoForge"></ProjectCard>
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
