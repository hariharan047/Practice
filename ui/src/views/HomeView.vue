<template>
  <div class="home">
    <HeaderView />
    <div class="md:flex">
      <div><SideNav /></div>
      <div></div>
    </div>
    
  </div>
</template>

<script>
import HeaderView from '../components/HeaderView.vue';
import SideNav from '@/components/SideNav.vue';
export default {
  name: "HomeView",
  components: {
    HeaderView,
    SideNav,
  },
};
</script>
