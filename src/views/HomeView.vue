<template>
  <div class="home">
    <button 
      class="my-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="navigateToRegisterForm()"
    >
      Novo Usuário
    </button>

    <DataTable :users="users" />

    <div 
      v-if="totalUsers === 0" 
      class="empty-message mt-24 text-center"
    >
      <p class="text-lg font-bold text-gray-600">Nenhum usuário cadastrado.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import DataTable from '@/components/DataTable.vue';

import { mapActions, mapState } from 'vuex';
import { useStore } from '@/store';
import router from '@/router';

@Options({
  components: {
    DataTable
  },
  computed: mapState(['users']),
  methods: mapActions(['fetchUsers']),
})

export default class HomeView extends Vue {
  totalUsers = 0
  navigateToRegisterForm() {
    router.push('/register');
  }
  created() {
    const store = useStore();
    store.dispatch('fetchUsers');
    const { users } = store.state;

    return {
      users,
    }
  }
  beforeUpdate() {
    const store = useStore();
    const { users } = store.state;
    this.totalUsers = users.length
  }
}
</script>
