<template>
  <div class="home">
    <div>
      <button @click="handleText">Change color</button>
      <div>
        <h3 :style="differentStyles">{{ text }}</h3>
        <h3>{{ update }}</h3>
        <h3>{{ update1 }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      text: "Hi Welcome To Chadura Tech",
      bgcolor: " ",
      color: " ",
      text1: "changed color",
      update: "",
      update1: "",
    };
  },
  computed: {
    differentStyles() {
      return {
        "background-color": this.bgcolor,
        color: this.color,
      };
    },
  },
  beforeCreate() {
    console.log("Creating firstValue");
  },
  created() {
    this.firstValue();
  },
  methods: {
    firstValue() {
      this.bgcolor = "red";
      this.color = "white";
    },
    handleText() {
      this.bgcolor = "yellow";
      this.color = "blue";
      this.updateMessage();
      // this.mounting();
    },
    updateMessage() {
      this.update = this.text1;
    },
    beforeMounting() {
      this.update1 = "beforeMounted";
    },
    mounting() {
      this.update1 = "Mounted";
    },
  },
  beforeMount() {
    this.beforeMounting();
  },
  mounted() {
    this.mounting();
  },
};
</script>
