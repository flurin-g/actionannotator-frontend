import { createStore } from "vuex";
import axios from "axios";
axios.defaults.baseURL = "http://0.0.0.0:8000";

const store = createStore({
  state: {
    name: "Vue",
    corpora: [],
    annotations: [],
    annotation: {},
    transcripts: [],
    transcript: {},
    utterances: [],
  },
  getters: {
    getCorpora: (state) => state.corpora,
    getAnnotations: (state) => state.annotations,
    getTranscripts: (state) => state.transcripts,
    getTranscriptId: (state) => state.transcript.id,
    getUtterances: (state) => state.utterances,
    //-----------| single annotation |-----------
    getAnnotationName: (state) => state.annotation.name,
    getAnnotationDate: (state) => state.annotation.date,
    getAnnotationBaseCorpus: (state) => state.annotation.baseCorpus,
    getAnnotationId: (state) => state.annotation.id,
  },
  mutations: {
    setCorpora(state, payload) {
      state.corpora = payload;
    },
    setAnnotations(state, payload) {
      state.annotations = payload;
    },
    setAnnotation(state, payload) {
      const { transcripts, ...annotation } = payload;
      state.annotation = annotation;
      state.transcripts = transcripts;
    },
    setTranscript(state, payload) {
      const { utterances, ...transcript } = payload;
      state.transcript = transcript;
      state.utterances = utterances;
    },
    setUtterances(state, payload) {
      state.utterances = [...state.utterances].map((e, i) => {
        return {
          ...e,
          'isActionAnnotation': payload[i]
        }
      });
    },
    setUtteranceByIndex(state, { index, isActionItem }) {
      let utterances = [...state.utterances];
      utterances[index].isActionItem = isActionItem;
      state.utterances = utterances;
    },
  },
  actions: {
    fetchCorpora({ commit }) {
      axios.get("/corpus").then((response) => {
        commit("setCorpora", response.data);
      });
    },
    fetchAnnotations({ commit }) {
      axios.get("/annotation").then((response) => {
        commit("setAnnotations", response.data);
      });
    },
    fetchAnnotation({ commit }, id) {
      axios.get(`/annotation/${id}`).then((response) => {
        commit("setAnnotation", response.data);
      });
    },
    addAnnotation({ commit }, annotation) {
      axios
          .post("/annotation", {
            ...annotation,
          })
          .then((response) => {
            commit("setAnnotation", response.data);
          });
    },
    deleteAnnotation({ commit }, id) {
      axios.delete(`/annotation/${id}`).then((response) => {
        commit('setAnnotations', response.data)
      })
    },
    fetchTranscript({ commit }, id) {
      axios.get(`/transcriptAnnotation/${id}`).then((response) => {
        commit("setTranscript", response.data);
      });
    },
    // eslint-disable-next-line no-unused-vars
    deleteTranscriptAnnotation({ commit }, id) {
      axios.delete(`/transcriptAnnotation/${id}`).then((response) => {
        commit('setUtterances', response.data)
      });
    },
    updateTranscript({ commit, getters }) {
      const utterances = getters.getUtterances;
      const id = getters.getTranscriptId 
      axios
        .put(`/transcriptAnnotation/${id}`, {
          utterances
        })
        .then((response) => {
          commit("setUtterances", response.data);
        });
    },
    // eslint-disable-next-line no-unused-vars
    downloadAnnotation({ _ }, {id, name}) {
      axios.get(`/download/${id}`, { responseType: 'blob' })
          .then(response => {
            const blob = new Blob([response.data], { type: 'application/zip' })
            const link = document.createElement('a')
            link.href = URL.createObjectURL(blob)
            link.download = `${name}.zip`
            link.click()
            URL.revokeObjectURL(link.href)
          }).catch(console.error)
    }
  },
});

export default store;
