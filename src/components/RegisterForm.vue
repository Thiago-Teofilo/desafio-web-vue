<template>
  <div class="mx-auto bg-gray-100 p-8 md:w-80 rounded-lg shadow-md">
    <router-link to="/" class="mb-4 block text-blue-500 hover:underline">Voltar</router-link>   
    <form @submit.prevent="submitForm" class="space-y-4">
      <div>
        <label class="block mb-1 font-semibold">Nome completo:</label>
        <input type="text" v-model="fullname" required class="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500" />
      </div>
      <div>
        <label class="block mb-1 font-semibold">Email:</label>
        <input type="email" v-model="email" required class="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500" />
      </div>
      <div>
        <label class="block mb-1 font-semibold">Data de nascimento:</label>
        <input type="date" v-model="dateOfBirth" required class="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500" />
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
        <label class="block mb-1 font-semibold">CPF:</label>
        <input type="text" v-model="cpf" required class="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500" />
      </div>
      <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Cadastrar</button>
    </form>
  </div>
  <div v-if="errorMessage" class="mx-auto bg-red-200 p-4 rounded-md mt-4 shadow-md md:w-80">
    <span class="text-red-800 font-semibold">{{ errorMessage }}</span>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { CreateUserInput } from '@/types/user';
import router from '@/router';
import axios from 'axios';

@Options({})
export default class UserForm extends Vue {
  fullname = '';
  email = '';
  dateOfBirth = '';
  genre = '';
  cpf = '';
  errorMessage = '';

  async submitForm() {
    const newUserData: CreateUserInput = {
      fullname: this.fullname,
      email: this.email,
      dateOfBirth: this.dateOfBirth,
      genre: this.genre,
      cpf: this.cpf,
    };
    try {
      await axios.post(`${process.env.API_URL}/users`, newUserData);
      this.fullname = '';
      this.email = '';
      this.dateOfBirth = '';
      this.genre = '';
      this.cpf = '';

      router.push('/');

    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const errorMessage = error.response.data.message
        if (errorMessage === 'Data conflict!') {
          this.errorMessage = 'CPF ou Email já estão cadastrados'
        } else if (errorMessage === 'Invalid CPF!') {
          this.errorMessage = 'CPF inválido'
        }
      }
      console.error('Error adding user:', error);
    }
  }
}
</script>

