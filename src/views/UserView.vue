<template>
  <div>
    <div class="mx-auto bg-gray-100 p-8 rounded-lg shadow-md md:w-80">
      <router-link to="/" class="mb-4 block text-blue-500 hover:underline">Voltar</router-link>   
      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label class="block mb-1 font-semibold">Nome completo:</label>
          <input type="text" v-model="fullname" class="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <label class="block mb-1 font-semibold">Email:</label>
          <input type="text" v-model="email" class="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <label class="block mb-1 font-semibold">CPF:</label>
          <input type="text" v-model="cpf" class="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <label class="block mb-1 font-semibold">Gênero:</label>
          <select v-model="genre" class="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500">
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        <div>
          <label class="block mb-1 font-semibold">Data de nascimento:</label>
          <input type="date" v-model="dateOfBirth" class="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500" />
        </div>
        <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Atualizar</button>
      </form>
      <button @click="handleDelete" class="w-full bg-red-500 text-white py-2 rounded-md mt-4 hover:bg-red-600 transition duration-300">Excluir</button>
    </div>
    <div v-if="showSuccessMessage" class="mx-auto bg-green-200 p-4 rounded-md mt-4 shadow-md md:w-80">
      <p class="text-green-800 font-semibold">Usuário atualizado</p>
    </div>
    <div v-if="errorMessage" class="mx-auto bg-red-200 p-4 rounded-md mt-4 shadow-md md:w-80">
      <span class="text-red-800 font-semibold">{{ errorMessage }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { formatDate } from "@/utils/format-date";
import { UpdateUserData } from "@/types/user";
import router from "@/router";
import apiClient from "@/services/api-client";
import axios from "axios";

export default class UserView extends Vue {
  id = 1;
  fullname = '';
  email = '';
  cpf = '';
  genre = '';
  dateOfBirth = '';
  showSuccessMessage = false;
  errorMessage = '';

  async mounted() {
    try {
      const userId = this.$route.params.id as string;
      const response = await apiClient.get(`/users/${userId}`);
      
      this.id = response.data.id;
      this.fullname = response.data.fullname;
      this.email = response.data.email;
      this.cpf = response.data.cpf;
      this.genre = response.data.genre;
      this.dateOfBirth = formatDate(response.data.dateOfBirth);

    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  async submitForm() {
    const updateUserData: UpdateUserData = {
      fullname: this.fullname,
      email: this.email,
      dateOfBirth: this.dateOfBirth,
      genre: this.genre,
      cpf: this.cpf,
    };
    try {
      await apiClient.put(`/users/${this.id}`, updateUserData);
      this.showSuccessMessage = true; 
      setTimeout(() => {
        this.showSuccessMessage = false; 
        router.push('/')
      }, 3000); 
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const errorMessage = error.response.data.message
        if (errorMessage === 'Data conflict!') {
          this.errorMessage = 'CPF ou Email já estão em uso'
        } else if (errorMessage === 'Invalid CPF!') {
          this.errorMessage = 'CPF inválido'
        }
      }
      console.error('Error adding user:', error);
    }
  }

  async handleDelete() {
    try {
      await apiClient.delete(`/users/${this.id}`);
      router.push('/');
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }
}
</script>
