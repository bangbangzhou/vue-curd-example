<template>
  <div id="app">

    <menu-view></menu-view>
  </div>
</template>

<script>
import MenuView from './views/menu/MenuView.vue';


export default {
  components: {
    MenuView,
  },
  name: "app"
};
</script>