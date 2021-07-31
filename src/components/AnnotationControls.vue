<template>
  <Toolbar class="sticky">
    <template #right>
      <Button
        icon="pi-pi-save"
        label="Discard"
        class="p-button-outlined p-button-danger p-mr-2"
        v-on:click="goToAnnotation"
      />
      <SplitButton
        label="Save"
        icon="pi pi-save"
        :model="items"
        v-on:click="saveAnnotation"
      ></SplitButton>
    </template>
  </Toolbar>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      items: [
        {
          label: "Save and return to annotation",
          icon: "pi pi-save",
          command: () => {
            this.saveAnnotation();
            this.goToAnnotation();
          },
        },
      ],
    };
  },
  methods: {
    ...mapActions(["updateTranscript"]),
    goToAnnotation() {
      this.$router.push("Annotation");
    },
    saveAnnotation() {
      this.updateTranscript()
    },
  },
};
</script>
<style lang="scss" scoped>
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
}
</style>