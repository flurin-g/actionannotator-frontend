<template>
  <div class="p-flex-column p-d-flex p-shadow-1 p-m-3 p-p-2">
    <div class="p-d-flex p-flex-column text">
      <div class="p-ml-2">
        <span class="head">Name: {{ getAnnotationName }}</span>
      </div>
      <div class="p-mb-2 p-ml-2">
        <span class="meta">Date: {{ getAnnotationDate }}</span>
      </div>
      <div class="p-mb-2 p-ml-2">
        <span class="meta">Base Corpus: {{ getAnnotationBaseCorpus }}</span>
      </div>
    </div>
    <hr/>
    <!-- ---------------| the individual transcripts |------------------- -->
    <div
        v-for="transcript in getTranscripts"
        v-bind:key="transcript.id"
        class="p-flex p-d-flex p-shadow-3 p-m-1 p-p-2 p-jc-between p-ai-center"
    >
      <div>
        <div class="sub-head">Name: {{ transcript.name }}</div>
      </div>
      <div>
        <Button
            icon="pi pi-pencil"
            class="p-button-default p-button-outlined p-mr-3"
            v-on:click="goToTranscript(transcript.id)"
        />
        <Button
            icon="pi pi-times"
            class="p-button-danger p-button-outlined"
            v-on:click="deleteAnnotationOfTranscript(transcript.id)"
        />
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters([
      "getAnnotationName",
      "getAnnotationDate",
      "getAnnotationBaseCorpus",
      "getTranscripts",
    ]),
  },
  methods: {
    ...mapActions(['fetchTranscript', 'deleteTranscriptAnnotation']),
    goToTranscript(id) {
      this.fetchTranscript(id);
      this.$router.push('Transcript');
    },
    deleteAnnotationOfTranscript(id) {
      console.log('method has been called in component')
      this.deleteTranscriptAnnotation(id)
    }
  },
};
</script>
<style lang="scss" scoped>
hr {
  border: 0;
  clear: both;
  display: block;
  width: 100%;
  background-color: var(--surface-200);
  height: 3px;
}

.sub-head {
  font-size: 1.2em;
}

div.text {
  text-align: left;

  .head {
    font-size: 2em;
  }
}
.meta {
  font-weight: bold;
  color: gray;
}
</style>
