<template>
  <div v-for="corpus in getCorpora" v-bind:key="corpus.id">
    <Corpus v-bind="corpus" />
  </div>
</template>
<script>
import Corpus from "../components/Corpus";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getCorpora"]),
  },
  created() {
    this.$store.dispatch("fetchCorpora");
  },
  components: {
    Corpus,
  },
};
</script>
