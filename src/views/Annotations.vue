<template>
  <div v-for="annotation in getAnnotations" v-bind:key="annotation.id">
    <Annotation v-bind="annotation" />
  </div>
</template>
<script>
import Annotation from "../components/Annotation";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      layout: "list",
    };
  },
  computed: {
    ...mapGetters(["getAnnotations"]),
  },
  created() {
    this.$store.dispatch("fetchAnnotations");
  },
  components: {
    Annotation,
  },
};
</script>
