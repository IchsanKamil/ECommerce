<template>
  <div class="container my-3">
    <!-- Add Task -->
    <button
      type="button"
      class="btn btn-outline-primary btn-sm mt-4"
      @click="showModal = !showModal"
    >Add to Cart</button>

    <!-- Modal Add-->
    <div class="loadingModal" v-if="showModal">
      <div class="theModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Add to Cart</h5>
              <button type="button" class="close" @click="showModal = !showModal">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row justify-content-center">
                <div class="col-8">
                  <form @submit.prevent="addToCart">
                    <div class="form-group">
                      <label for="quantity">Quantity :</label>
                      <input type="number" class="form-control" v-model="quantity" id="quantity" />
                    </div>
                    <button class="btn btn-outline-primary mr-1">Add</button>
                    <button class="btn btn-outline-secondary" @click="showModal = !showModal">Close</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddProduct",
  data() {
    return {
      showModal: false,
      quantity: '',
    };
  },
  props: ['productId'],
  methods: {
    addToCart() {
      if(!localStorage.token) {
        this.$router.push({ name: 'Login' })
      } else {
        let payload = {
          quantity: this.quantity,
          ProductId: this.productId
        }
        this.$store.dispatch('addToCart', payload)
        this.quantity = ''
        this.showModal = false
      }
    }
  }
};
</script>

<style>
.loadingModal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1072;
  /*display: none;*/
}
.theModal {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  width: 100%;
  min-width: 600px;
  max-width: 800px;
  /*background: white;*/
  /*box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);*/
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  padding: 1em;
  color: black;
  text-align: center;
}
</style>
