<template>
  <div class="Category">
    <div class="title is-4 has-text-centered">Browse by category</div>
    <div class="Category__items">
      <draggable
        v-model="categoryItems"
        handle=".CategoryItem__reorderHandle"
        @end="categoryItems"
      >
        <category-item
          v-for="item in categoryItems"
          :key="item.key"
          :item="item"
          @change="handleItemChange"
        />
      </draggable>
    </div>
  </div>
</template>

<script>
import Draggable from "vuedraggable";
import CategoryItem from "@/components/CategoryItem";
import { JokeService } from "@/services/JokeService";

/**
 * @module Category
 */
export default {
  name: "Category",
  components: { CategoryItem, Draggable },
  data() {
    return {
      newCategoryContent: "",
      categoryItems: [],
    };
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    fetchCategories() {
      JokeService.fetchAllCategories().then((response) => {
        this.categoryItems = response;
      });
    },
    /**
     * @param {CategoryItem} item
     */
    handleItemChange(item) {
      JokeService.fetchRandomJoke(item.name).then(() => {
        this.fetchCategories();
      });
    },
  },
};
</script>
<style lang="scss">
@import "../assets/styles/app";
.Category {
  &__items {
    margin-top: $theme--spacing-l;
  }
}
</style>
