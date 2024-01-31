<template>
  <div>
    <h1>Vue.js HTTP GET and POST Requests Example</h1>
    <button @click="getData">Get Data</button>
    <button @click="postData">Post Data</button>
    <div v-if="responseData">
      <h2>Response Data:</h2>
      <pre>{{ responseData }}</pre>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      responseData: null,
    };
  },
  methods: {
    getData() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          this.responseData = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
        
    },
    postData() {
      const dataToSend = {
        title: "Sample Post",
        body: "This is the content of the post.",
        userId: 1,
      };

      axios
        .post("https://jsonplaceholder.typicode.com/posts", dataToSend)
        .then((response) => {
          this.responseData = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style></style>
