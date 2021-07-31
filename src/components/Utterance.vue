<template>
  <div class="p-grid p-shadow-1 p-m-3 p-p-2">
    <div class="p-col-1 right-spacer">
      <Button
        icon="pi pi-thumbs-up"
        class="p-button-rounded p-button-success p-button-outlined p-mr-3 pos-static"
        v-on:click="setBackground('yes')"
      />
      <Button
        icon="pi pi-thumbs-down"
        class="p-button-rounded p-button-danger p-button-outlined pos-static"
        v-on:click="setBackground('no')"
      />
    </div>
    <div class="p-col-11 p-pl-5" :style="backgroundColor">
      <div class="p-text-left">Speaker: {{ speaker }}</div>
      <div class="p-text-left">{{ text }}</div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: {
    speaker: String,
    index: Number,
    text: String,
    isActionItem: String
  },
  data() {
    return {
      colorMap: {
        maybe: "white",
        no: "var(--pink-100)",
        yes: "var(--green-100)",
      },
    };
  },
  computed: {
    backgroundColor() {
      return `background-color: ${this.colorMap[this.isActionItem]};`;
    },
  },
  methods: {
    ...mapMutations(["setUtteranceByIndex"]),
    setBackground(isActionItem) {
      this.setUtteranceByIndex({
        index: this.index,
        isActionItem: this.isActionItem == isActionItem ? "maybe" : isActionItem,
      });
    },
  },
};
</script> 
<style lang="scss" scoped>
.right-spacer {
  border-right: 4px solid gray;

  margin-left: -3px;
}
.pos-static {
  position: static;
  }
</style>