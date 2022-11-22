<template>
  <ContainerApp>
    <slot name="title"></slot>
    <div class="apartments-list">
      <template v-for="apartment in items">
        <slot name="apartment" v-bind:apartment="apartment"></slot>
      </template>
    </div>
  </ContainerApp>
</template>

<script>
import ContainerApp from "../shared/ContainerApp";

export default {
  name: "ApartmentsList",
  components: {
    ContainerApp,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
}
</style>
