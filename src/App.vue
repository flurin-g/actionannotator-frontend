<template>
  <div class="p-grid p-flex-column">
    <div class="p-flex-col">
      <Menubar :model="items" />
    </div>
    <div class="p-flex-col">
        <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: "Home",
          icon: "pi pi-home",
          to: { name: "home" },
        },
        {
          label: "Corpora",
          icon: "pi pi-book",
          to: { name: "corpora" },
        },
        {
          label: "Annotations",
          icon: "pi pi-file",
          to: { name: "annotations" },
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
