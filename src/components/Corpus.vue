<template>
  <div class="box p-d-flex p-shadow-1 p-m-3 p-p-2">
    <h1 class="p-ml-2">{{ name }}</h1>

    <div class="p-ml-auto p-d-flex p-ai-center">
      <Button
        icon="pi pi-plus"
        class="p-button-success p-button-outlined p-m-2"
        label="Annotation"
        v-on:click="openDialog"
      />
    </div>
  </div>

  <Dialog header="Create a new annotation" v-model:visible="display">
    <div class="p-mb-5 base-corpus-name">Base Corpus: {{ name }}</div>
    <span class="p-float-label">
      <InputText id="annotationName" type="text" v-model="annotationName" />
      <label for="annotationName">Annotation Name</label>
    </span>
    <template #footer>
      <Button
        label="Cancel"
        icon="pi pi-times"
        v-on:click="cancelAnnotation"
        class="p-button-text"
      />
      <Button
        label="Save"
        icon="pi pi-check"
        v-on:click="saveAnnotation"
        autofocus
      />
    </template>
  </Dialog>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      display: false,
      annotationName: "",
    };
  },
  props: {
    name: String,
    id: String,
  },
  methods: {
    ...mapActions(["addAnnotation", "fetchTranscript"]),
    openDialog() {
      this.display = true;
    },
    cancelAnnotation() {
      this.annotationName = "";
      this.display = false;
    },
    saveAnnotation() {
      this.addAnnotation({
        name: this.annotationName,
        baseCorpus: this.name,
      });
      this.display = false;
      this.$router.push("Annotations");
    },
  },
};
</script>
<style lang="scss" scoped>
.base-corpus-name {
  font-weight: bold;
  color: var(--text-color-secondary);
}

input {
  width: 100%;
}
</style>


