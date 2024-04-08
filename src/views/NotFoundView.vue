<template>
  <router-link to="/">Voltar</router-link>   
  <div className="flex items-center justify-center h-screen">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Página não encontrada</h1>
      <p className="text-gray-400">A página que você está procurando não existe.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class NotFoundView extends Vue { 
}
</script>