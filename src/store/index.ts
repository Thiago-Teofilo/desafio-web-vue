import { Store, createStore, useStore as baseUseStore } from 'vuex';
import { CreateUserInput, User } from '../types/user';
import { InjectionKey } from 'vue';
import apiClient from '@/services/api-client';

export interface State {
  users: User[];
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    users: [],
  }, 
  mutations: {
    setStateData(state, users: User[]) {
      state.users = users;
    },
    addUser(state, newUser: User) {
      state.users.push(newUser);
    }, 
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const response = await apiClient.get('/users');
        commit('setStateData', response.data);      
      } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
      }
    },
    async addUser({ commit }, newUserData: CreateUserInput) {
      try {
        const response = await apiClient.post<User>('/users', newUserData);
        commit('addUser', response.data);
      } catch (error) {
        console.error('Error adding user:', error);
        throw error;
      }
    },
  }
})

export function useStore() {
  return baseUseStore(key);
}


