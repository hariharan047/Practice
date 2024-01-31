<template>
  <div>
    <div></div>
    <div>
      <form @submit.prevent="CreatePost">
        <div>
          <label>User Id</label>
          <input type="text" id="id" v-model="FormData.id" />
        </div>
        <div>
          <label>Name</label>
          <input type="text" id="name" v-model="FormData.name" />
        </div>
        <div>
          <label>content</label>
          <input type="text" id="content" v-model="FormData.content" />
        </div>
        <div>
          <button>Create Post</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      FormData: {
        id: "",
        name: "",
        content: "",
      },
    };
  },
  methods: {
    CreatePost() {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", this.FormData)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style></style>
