<template>
  <AnnotationControls />
  <div v-for="(utterance, index) in getUtterances" v-bind:key="utterance.id">
    <Utterance v-bind="{index, ...utterance}" />
  </div>
</template>
<script>
import Utterance from "../components/Utterance";
import { mapGetters } from "vuex";
import AnnotationControls from '../components/AnnotationControls.vue';
export default {
  computed: {
    ...mapGetters(["getUtterances"]),
  },
  created() {
  },
  components: {
    Utterance,
    AnnotationControls
  },
};
</script>
