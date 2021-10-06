<template>
  <div class="NavigationBar">
    <router-link :to="{ name: 'categories' }" data-testid="NavigationBar__categories">
      Jokes
    </router-link> |
    <router-link :to="{ name: 'people' }" data-testid="NavigationBar__People">
      People
    </router-link> |
    <router-link :to="{ name: 'search' }" data-testid="NavigationBar__Search">
      Search
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar'
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/app";
.NavigationBar {
  padding: $theme--spacing-l;

  a {
    font-weight: bold;
    color: $theme--color-secondary;

    &.router-link-exact-active {
      color: $theme--color-main;
    }
  }
}
</style>
