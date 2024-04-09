<template>
  <div class="data-table">
    <div class="block md:hidden">
      <!-- Exibir tabela como blocos na vertical em telas com largura menor que 1000px -->
      <div v-for="user in users" :key="user.id" class="mb-4 border rounded-md p-4">
        <div class="font-bold">ID: {{ user.id }}</div>
        <div><span class="font-bold">Nome Completo:</span> {{ user.fullname }}</div>
        <div><span class="font-bold">Email:</span> {{ user.email }}</div>
        <div><span class="font-bold">Data de Nascimento:</span> {{ formatDate(user.dateOfBirth) }}</div>
        <div><span class="font-bold">Gênero:</span> {{ user.genre }}</div>
        <div><span class="font-bold">CPF:</span> {{ user.cpf }}</div>
        <div class="mt-2 flex justify-center">
          <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" @click="navigateToUser(user.id)">Editar</button>
          <button class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-2" @click="handleDeleteUser(user.id)">Excluir</button>
        </div>
      </div>
    </div>
    <div class="hidden md:block overflow-x-auto">
      <!-- Exibir tabela normalmente -->
      <table class="min-w-max w-full table-auto">
        <thead>
          <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th class="py-2 px-3 text-center">#</th>
            <th class="py-2 px-3 text-left">Nome Completo</th>
            <th class="py-2 px-3 text-left">Email</th>
            <th class="py-2 px-3 text-center">Data de nascimento</th>
            <th class="py-2 px-3 text-center">Gênero</th>
            <th class="py-2 px-3 text-left">CPF</th>
            <th class="py-2 px-3 text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id" class="hover:bg-gray-300">
            <th class="py-1 px-3 text-center whitespace-nowrap">{{ user.id }}</th>
            <th class="py-1 px-3 text-left">{{ user.fullname }}</th>
            <th class="py-1 px-3 text-left">{{ user.email }}</th>
            <th class="py-1 px-3 text-center">{{ formatDate(user.dateOfBirth) }}</th>
            <th class="py-1 px-3 text-center">{{ user.genre }}</th>
            <th class="py-1 px-3 text-left">{{ user.cpf }}</th>
            <th class="py-1 px-3 text-center">
              <button class="py-1 px-3 text-blue-600 hover:text-blue-900 mr-3" @click="navigateToUser(user.id)">Editar</button>
              <button class="py-1 px-3 text-red-600 hover:text-red-900" @click="handleDeleteUser(user.id)">Excluir</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { formatDate } from '@/utils/format-date'
import { useRouter } from 'vue-router';
import axios from 'axios';

export default defineComponent({
  name: 'DataTable',
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const router = useRouter();

    const navigateToUser = (userId: number) => {
      router.push(`/${userId}`);
    };

    const handleDeleteUser = async (userId: number) => {
      await axios.delete(`${process.env.API_URL}/users/${userId}`);
      window.location.reload();
    };

    return {
      formatDate,
      navigateToUser,
      handleDeleteUser,
    };
  },
});
</script>

<style scoped>
</style>
