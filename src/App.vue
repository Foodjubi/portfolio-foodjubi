<script setup>
import ProfilHeader from "@/components/ProfilHeader.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import {computed, ref} from "vue";
import ProjectFilters from "@/components/ProjectFilters.vue";
import ContactSection from "@/components/ContactSection.vue";
import SiteNav from "@/components/SiteNav.vue"
import SkillsSection from "@/components/SkillsSection.vue"
const projets = [
  {
    id: 1,
    title: "MonPluginV2",
    techno: "Java / Spigot",
    description: "Plugin Minecraft : métiers, commandes, économie, sauvegarde de données via JSON et YAML",
    category: "Java",
    status: "Ancien Projet",
    url: "https://github.com/Foodjubi/MonPluginV2"
  },
  {
    id: 2,
    title: "Realms Of Eternity",
    techno: "Java / NeoForge",
    description: "Création en cours d'un mod Minecraft, objectif: créer un système RPG dans le jeu",
    category: "Java",
    status: "En cours",
    url: "https://github.com/Foodjubi/realms-of-eternity"
  },
  {
    id: 3,
    title: "SecurityBot",
    techno: "Python / Discord.py",
    description: "Bot Discord : commandes, administration, sauvegarde de données via JSON, RPG",
    category: "Python",
    status: "Ancien Projet",
    url: ""
  },
  {
    id: 4,
    title: "Portfolio Vue",
    techno: "JavaScript / Vue.js 3",
    description: "Mon portfolio codé grâce à Vue.js",
    category: "JavaScript",
    status: "En cours",
    url: "https://github.com/Foodjubi/portfolio-foodjubi"
  }
]

const categorieActive = ref("Tous")
const recherche = ref("")
const annee = new Date().getFullYear()

const projectsFiltres = computed(() => {
  return projets.filter((projet) => {
    const bonneCategorie = categorieActive.value === "Tous" || projet.category === categorieActive.value
    const texte = `${projet.title} ${projet.techno} ${projet.description}`.toLowerCase()
    const bonneRecherche = texte.includes(
        recherche.value.trim().toLowerCase()
    )
    return bonneRecherche && bonneCategorie
  })
})


function reinitialiser(){
  categorieActive.value = "Tous"
  recherche.value = ""
}
</script>

<template>
  
<SiteNav />
<SkillsSection />
  
  <div class="portfolio-shell">
    <ProfilHeader></ProfilHeader>
    <main id="projets" class="content-panel">
      <p class="eyebrow">MES RÉALISATIONS</p>
      <h2>Mes projets personnels</h2>
      <p>Quelques projets anciens et mon apprentissage actuel.</p>

      <ProjectFilters v-model:search="recherche" v-model:category="categorieActive"/>
      <p class="result-count" aria-live="polite">{{ projectsFiltres.length }} projet(s) affiché(s)</p>

      <section v-if="projectsFiltres.length > 0" class="projects-grid" aria-label="Projets">
        <ProjectCard v-for="project in projectsFiltres" :key="project.id" :title="project.title" :techno="project.techno" :description="project.description" :status="project.status" :url="project.url" />
      </section>

      <div v-else class="empty-state">
        <p>Aucun projet ne correspond à ta recherche</p>
        <button type="button" @click="reinitialiser">
          Réinitialiser les filtres
        </button>
      </div>
    </main>

    <ContactSection></ContactSection>

    <footer class="site-footer">
      © {{ annee }} Julien Gaubert · Portfolio Vue 3
    </footer>
  </div>

</template>

<style scoped>

</style>
