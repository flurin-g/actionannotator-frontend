<template>
  <div class="box p-d-flex p-shadow-1 p-m-3 p-p-2">
    <div class="p-d-flex p-flex-column">
      <div class="annotation-name">{{ name }}</div>
      <div class="p-text-left">Base Corpus: {{ baseCorpus }}</div>
      <div class="p-text-left">Date: {{ date }}</div>
    </div>
    <div class="p-ml-auto p-d-flex p-ai-center">
      <Button label="Open Annotation" class="p-button-outlined p-mr-2" v-on:click="goToAnnotation(id)"/>
      <Button icon="pi pi-download" class="p-button-outlined p-button-success p-mr-2" v-on:click="downloadAnnotationData(id, name)"/>
      <Button icon="pi pi-times" class="p-button-outlined p-button-danger" v-on:click="deleteAnnotationData(id)" />
    </div>
  </div>
</template>
<script>
import {mapActions} from "vuex";

export default {
  props: {
    name: String,
    id: String,
    baseCorpus: String,
    date: String,
  },
  methods: {
    ...mapActions(['fetchAnnotation', 'downloadAnnotation', 'deleteAnnotation']),
    goToAnnotation(id) {
      this.$store.dispatch('fetchAnnotation', id);
      this.$router.push('Annotation');
    },
    downloadAnnotationData(id, name) {
      this.downloadAnnotation({id, name})
    },
    deleteAnnotationData(id) {
      this.deleteAnnotation(id)
    }
  }
};
</script>
<style lang="scss" scoped>
.annotation-name {
  font-size: 2em;
  font-weight: bold;
}
</style>