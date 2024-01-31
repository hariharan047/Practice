<template>
  <div class="home">
    <div>
      <PostReq />
    </div>
  </div>
</template>

<script>
import PostReq from "@/components/PostReq.vue";
export default {
  name: "HomeView",
  components: {
    PostReq,
  },
};
</script>
