<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <div class="btn btn-outline-info my-3">My Cart</div>
      <b-card-group deck>
        <Product v-for="product in products" :key="product.id" :product="product"></Product>
      </b-card-group>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Product from "@/components/Product.vue";

export default {
  name: "MainPage",
  components: {
    Navbar,
    Product
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  created() {
    // console.log(products, '<<<<');
    console.log(this.$store.state.products, "<<<<");
    this.$store.dispatch("fetchProducts");
  }
};
</script>

<style>
</style>
