import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseUrl: 'http://localhost:3000',
    products: [],
    carts: [],

  },
  mutations: {
    SET_PRODUCT(state, payload) {
      state.products = payload;
    },
    SET_CART(state, payload) {
      state.carts = payload;
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
    fetchCart({ commit }) {
      let id = localStorage.currentUserId
      axios({
        method: 'get',
        url: `${this.state.baseUrl}/customers/${id}`,
        headers: {
          token: localStorage.token,
        },
      })
        .then((result) => {
          console.log(result.data, '<<< fetch cart');
          // this.items = result.data;
          commit('SET_CART', result.data);
        })
        .catch((err) => {
          console.log(err, '<< err fecthTask');
        });
    },
    addToCart(context, payload) {
      console.log(payload, '<<< payload');
      let id = localStorage.currentUserId
      axios({
        method: "post",
        url: `${this.state.baseUrl}/customers/${id}`,
        headers: {
          token: localStorage.token
        },
        data: {
          quantity: payload.quantity,
          ProductId: payload.ProductId
        }
      })
        .then(result => {
          console.log("add product");
        })
        .catch(err => {
          console.log(err, "<<< err addTask");
        });
    },
    editProductCart(context, payload) {
      console.log(payload, '<<< payload');
      let id = localStorage.currentUserId
      axios({
        method: "put",
        url: `${this.state.baseUrl}/customers/${id}/${payload.ProductId}`,
        headers: {
          token: localStorage.token
        },
        data: {
          quantity: payload.quantity,
        }
      })
        .then(result => {
          console.log(result, "update product");
          context.dispatch('fetchCart')
        })
        .catch(err => {
          console.log(err, "<<< err addTask");
        });
    },
    deleteProductCart(context, ProductId) {
      let id = localStorage.currentUserId
      console.log(id, +ProductId, '<<<<');
      axios({
        method: "delete",
        url: `${this.state.baseUrl}/customers/${id}/${ProductId}`,
        headers: {
          token: localStorage.token
        },
      })
        .then(result => {
          console.log(result, "delete product");
          context.dispatch('fetchCart')
        })
        .catch(err => {
          console.log(err, "<<< err delete");
        });
    }
  },
  modules: {
  },
});
