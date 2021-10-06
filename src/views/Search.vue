<template>
  <div class="Search">
    <div class="title is-4 has-text-centered">Search</div>
    <div class="Search__addNew">
      <input
        v-model.trim="newSearchContent"
        class="input"
        type="text"
        name="search"
        placeholder="Search"
        @keyup.enter.prevent="search"
      />
    </div>
    <div class="Search__items">
      <draggable
        v-model="searchItems"
        handle=".CategoryItem__reorderHandle"
        @end="searchItems"
      >
        <category-item
          v-for="item in searchItems"
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
      newSearchContent: "",
      searchItems: [],
    };
  },
  // mounted() {
  //   this.fetchCategories();
  // },
  methods: {
    // fetchCategories() {
    //   JokeService.fetchAllCategories().then((response) => {
    //     this.searchItems = response;
    //   });
    // },
    search() {
      // do nothing if we have no content
      if (!this.newSearchContent) return;

      JokeService.fetchRandomJoke(this.newSearchContent).then((response) => {
        this.searchItems = response;
      });
    },
    /**
     * @param {CategoryItem} item
     */
    // handleItemChange(item) {
    //   JokeService.fetchRandomJoke(item.name).then(() => {
    //     this.fetchCategories();
    //   });
    // },
  },
};
</script>
<style lang="scss">
@import "../assets/styles/app";
.Search {
  &__items {
    margin-top: $theme--spacing-l;
  }
}
</style>
