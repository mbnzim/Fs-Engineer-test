<template>
  <base-item class="CategoryItem" :item="item">  
    <template #name>
      <div
        class="break-all"
        data-testid="contentEditTrigger"
        @dblclick="deleteItem"
      >
        {{ item.name }}
      </div>

    </template>
    <template #source>
      <div
        v-if="!isEditing"
        class="task-date"
        data-testid="contentEditTrigger"
        @dblclick="deleteItem"
      >
        {{ dateLocal }}
      </div>
      <div v-else></div>
    </template>
    <template #actions>
      <button
        class="CategoryItem__delete button is-inverted is-primary is-small"
        data-testid="deleteTrigger"
        @click.prevent="deleteItem"
      >
        <span class="icon"><i class="fa fa-eye fa-lg" /></span>
      </button>
      <div class="CategoryItem__reorderHandle">
        <i class="fa fa-bars" />
      </div>
    </template>
  </base-item>
</template>

<script>
import BaseItem from "@/components/BaseItem";

/**
 * @module CategoryItem
 */
export default {
  name: "CategoryItem",
  components: { BaseItem },
  props: {
    /**
     *  @type CategoryItem
     */
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isEditing: false,
      contentLocal: "",
    };
  },
  computed: {
    completedLocal: {
      /**
       * Transforms isCompleted
       */
      get() {
        return this.item.isCompleted;
      },
      /**
       * Converts isCompleted
       * Emits the entire changed item
       * @param {Boolean} value
       */
      set(value) {
        this.emitChange({
          isCompleted: !!value,
        });
      },
    },
    dateLocal: {
      get(){
         var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
         var localDate = new Date(this.item.date);
        return `${localDate.toLocaleDateString("en-ZA", options)} ${localDate.toLocaleTimeString()}`;
      }
    }
  },
  methods: {
    /**
     * Deletes a todo item
     */
    deleteItem() {
      this.emitChange({
        isDeleted: true,
      });
    },
    /**
     * Emits the changes to the TODO item up to the parent.
     * @param {Object} updatedItem - the todo item
     */
    emitChange(updatedItem) {
      this.$emit("change", {
        ...this.item,
        ...updatedItem,
      });
    },
    /**
     * Starts the editing of a todo item.
     * Focuses the input item immediately
     * @return {Promise<void>}
     */
    async enableEdit() {
      this.contentLocal = this.item.name;

      await this.$nextTick();
      this.$refs.editInput.focus();
    },
    /**
     * Saves the editing changes.
     * If no name is provided, just closes
     */
    saveEdit() {
      if (this.contentLocal) {
        this.emitChange({
          name: this.contentLocal,
        });
      }
      this.stopEdit();
    },
    /**
     * Stops the editing, without saving anything
     */
    stopEdit() {
      this.isEditing = false;
      this.contentLocal = "";
    },
  },
};
</script>

<style lang='scss' scoped>
@import "../assets/styles/app";
.CategoryItem {
  font-weight: bold;
  &:hover {
    .CategoryItem__delete {
      opacity: 1;
    }
  }

  &__delete {
    opacity: 0;
    margin-right: $theme--spacing-s;
    border-radius: 100%;
  }

  &__reorderHandle {
    &:hover {
      cursor: grab;
    }

    &:active {
      cursor: grabbing;
    }
  }

  .task-date {
    font-size: 12px;
    font-weight: bold;
    font-style: italic;
  }
}
</style>
