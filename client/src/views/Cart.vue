<template>
  <div>
    <Navbar></Navbar>
    <div class="my-5 container">
      <table class="table table-hover">
        <thead>
          <tr>
            <!-- <th scope="col">#</th> -->
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <CartData
            v-for="(cart, idx) in carts" :key="idx"
            :cart="cart"
            :no="idx"
          ></CartData>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import CartData from "@/components/CartData.vue";

export default {
  name: "Cart",
  data() {
    return {
      // items: cart()
    };
  },
  components: {
    Navbar,
    CartData,
  },
  computed: {
    carts() {
      return this.$store.state.carts;
    }
  },
  created() {
    this.$store.dispatch("fetchCart");
  }
};
</script>