<template>
  <base-item class="PersonItem" :item="item">
    <template #source>
      <div></div>
    </template>
    <template #actions>
      <div class="buttons">
        <button
          class="button is-small is-inverted is-primary"
          title="View Details"
          data-testid="viewTrigger"
        >
          <span class="icon">
            <span class="fa fa-eye fa-lg" />
          </span>
        </button>       
      </div>
    </template>
  </base-item>
</template>

<script>
import BaseItem from "@/components/BaseItem";

/**
 * @module PersonItem
 */
export default {
  name: "PersonItem",
  components: { BaseItem },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.PersonItem .buttons {
  flex-wrap: nowrap;
}
</style>
