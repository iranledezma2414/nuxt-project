<template>
  <div :class="['apple-container', { 'light-mode': isLight }]">
    <button @click="toggleTheme" class="theme-switch">
      <i :class="isLight ? 'fa-solid fa-moon' : 'fa-solid fa-sun'"></i>
    </button>

    <main class="canvas">
      <div class="glass-card">
        <header class="card-header">
          <div class="profile-frame">
            <img src="/profile/profile.png" alt="Irán Ledezma" class="profile-img" />
          </div>
          <div class="identity">
            <h1>Irán Ledezma</h1>
            <p class="role-text">Ingeniero en TIC</p>
          </div>
        </header>

        <div class="divider"></div>

        <section class="highlight-box">
          <div class="icon-badge">
            <i class="fa-solid fa-graduation-cap"></i>
          </div>
          <div class="text-content">
            <span class="label">Certificación</span>
            <h2>Diplomado en Ciencia de Datos</h2>
            <p>Especialista en modelos predictivos y análisis de big data.</p>
          </div>
        </section>

        <section class="skills-list">
          <div class="skill">
            <i class="fa-brands fa-python"></i> <span>Python Data</span>
          </div>
          <div class="skill">
            <i class="fa-brands fa-vuejs"></i> <span>Nuxt 3</span>
          </div>
          <div class="skill">
            <i class="fa-solid fa-database"></i> <span>SQL</span>
          </div>
        </section>

        <button class="action-btn">Contactar</button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isLight = ref(false)

const toggleTheme = () => {
  isLight.value = !isLight.value
  localStorage.setItem('theme', isLight.value ? 'light' : 'dark')
}

onMounted(() => {
  // Recuperar tema
  if (localStorage.getItem('theme') === 'light') isLight.value = true
})
</script>