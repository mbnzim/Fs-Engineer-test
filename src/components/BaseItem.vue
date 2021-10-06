<template>
  <div
    class="BaseItem"
  >
    <div class="BaseItem__content">
      <slot name="name" >
        {{ item.name }}
      </slot>
      <slot name="source">
        {{ item.source }}
      </slot>
    </div>
    <div class="BaseItem__actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<script>
/**
 * @module BaseItem
 */
export default {
  name: 'BaseItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/styles/app";
.BaseItem {
  display: flex;
  align-items: center;
  margin-bottom: $theme--spacing-m;
  background: $theme--color-white;
  padding: $theme--spacing-s;
  border-radius: 5px;

  &__content {
    flex: 1 1 auto;
    padding: 0 $theme--spacing-m;
  }

  &__actions {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
