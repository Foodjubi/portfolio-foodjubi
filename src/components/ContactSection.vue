<script setup>
import {ref} from 'vue'

const email = "juliengaub33@gmail.com"
const copieEffectuee = ref(false)

async function copierEmail(){
  try {
    await navigator.clipboard.writeText(email)
    copieEffectuee.value = true
  }catch (erreur){
    copieEffectuee.value = false
    window.alert("Copie impossible : utilisez le lien e-mail")
  }
}
</script>

<template>

  <section id="contact" class="content-panel contact-panel">
    <p class="eyebrow">TRAVAILLONS ENSEMBLE</p>
    <h2>Contact</h2>
    <p>
      Je recherche principalement un stage en développement informatique afin d'acquérir de l'expérience professionnelle. Je suis également ouvert aux formations et aux opportunités professionnelles.
    </p>

    <div class="contact-actions">
      <a class="button button-primary" :href="`mailto:${email}`"> M'envoyer un e-mail </a>
      <button class="button button-secondary copy-button" type="button" @click="copierEmail">
        {{copieEffectuee ? 'Adresse copiée !' : 'Copier mon e-mail'}}
      </button>
    </div>

    <p class="contact-note" role="status" aria-live="polite">
      {{copieEffectuee ? "Tu peux coller mon adresse ailleurs " : ""}}
    </p>
  </section>

</template>

<style scoped>

</style>
