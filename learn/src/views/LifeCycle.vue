<template>
  <div>
    <div>
      <!-- <button @click="changeStyle">Change</button> -->
      <h3 :style="differentStyle">{{ text }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgcolor: "red",
      color: "white",
      size: "50",
      text: "Welcome To Chadura Tech",
    };
  },
  computed: {
    differentStyle() {
      return {
        "background-color": this.bgcolor,
        color: this.color,
        "font-size": this.size + "px",
      };
    },
  },
  methods: {
    changeStyles() {
      setTimeout(() => {
        this.bgcolor = "yellow";
        this.color = "blue";
        this.size = "100";
      }, 1000);
    },
    updateMessage() {
      this.text = "Welcome To USDC";
    },
  },
  mounted() {
    this.changeStyles();
  },
  updated() {
    this.updateMessage();
    alert("mounted");
  },
};
</script>

<style></style>
