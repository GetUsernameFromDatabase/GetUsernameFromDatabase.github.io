<template>
  <div
    class="proficiency-item-container"
    :class="column"
  >
    <div class="proficiency-item">
      <h3>
        {{ title }}
      </h3>
      <p
        v-for="item in content"
        :key="item"
      >
        {{ item }}
      </p>
    </div>
  </div>
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
    column: {
      type: String,
      default: 'col-md-6'
    }
  },
};
</script>

<style>
.proficiency-item {
  background-color: rgba(13, 60, 82, 0.1);
  padding: 20px;
  width: 100%;
  height: 95%;
  margin-bottom: 10px;
  border-radius: 5px;
}
.proficiency-item-container {
	padding-left: 5px;
	padding-right: 5px;
}
</style>