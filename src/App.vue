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
 <router-view/>

</template>

<style scoped>

</style>
