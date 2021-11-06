<template>
  <MDBCol class="proficiency-item">
    <h3>
      {{ title }}
    </h3>
    <p
      v-for="item in content"
      :key="item"
    >
      {{ item }}
    </p>
  </MDBCol>
</template>

<script>
export default {
  name: 'ItemProficiency',
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: Array,
      required: true,
    },
  },
};
</script>
