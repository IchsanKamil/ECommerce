import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseUrl: 'http://localhost:3000',
    products: [],

  },
  mutations: {
    SET_PRODUCT(state, payload) {
      state.products = payload;
    },
  },
  actions: {
    fetchProducts({ commit }) {
      axios({
        method: 'get',
        url: `${this.state.baseUrl}/products`,
        headers: {
          token: localStorage.token,
        },
      })
        .then((result) => {
          console.log(result.data, '<<< fetch product');
          // this.items = result.data;
          commit('SET_PRODUCT', result.data);
        })
        .catch((err) => {
          console.log(err, '<< err fecthTask');
        });
    },
  },
  modules: {
  },
});
