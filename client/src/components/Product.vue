<template>
  <div>
    <b-card
      :title="product.name"
      :img-src="product.image_url"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 15rem;"
      class="mb-2"
    >
      <b-card-text>Price: Rp {{ Number((product.price).toFixed(1)).toLocaleString()}}</b-card-text>
      <b-card-text>Stock: {{product.stock}}</b-card-text>
      <AddProduct
      :productId="product.id"
      ></AddProduct>
      <!-- <b-button href="#" variant="primary">Add to cart</b-button> -->
    </b-card>
  </div>
</template>

<script>
import AddProduct from '@/components/AddProduct.vue'

export default {
  name: "Product",
  props: ["product"],
  components: {
    AddProduct,
  }
};
</script>
