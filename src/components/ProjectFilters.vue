<script setup>

defineProps({
  category: {type: String, required: true},
  search: {type: String, required: true}
})

const emit = defineEmits([
    "update:category",
    "update:search"
])

const categories = ["Tous", "Java", "Python", "JavaScript"]

function changerCategorie(category) {
  emit("update:category", category)
}

function changerRecherche(event){
  emit("update:search", event.target.value)
}

</script>

<template>

  <div class="filters-panel">
    <div class="category-buttons" role="group" aria-label="Filtrer les projets">
      <button v-for="option in categories" :key="option" type="button" class="filter-button" :class="{'is-active': category === option}" :aria-pressed="category === option" @click="changerCategorie(option)">
        {{ option }}
      </button>
    </div>

    <label class="search-field" for="search">
      <span>Rechercher un projet</span>
      <input id="search" type="search" :value="search" placeholder="Java, Python, bot, Minecraft" @input="changerRecherche" />
    </label>
  </div>

</template>

<style scoped>

</style>