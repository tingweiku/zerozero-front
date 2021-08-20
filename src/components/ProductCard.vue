<template lang="pug">
b-card.product-card.mb-2(
  :title="product.name"
  :sub-title="product.description"
  img-top
  :img-src="product.image"
)
  b-card-text
    img(:src='require("../assets/zcoin.png")')
    | {{ product.price }}
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
