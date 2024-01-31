<template>
    <header class="bg-[#a2b5e5] p-3 w-full">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-5">
          <i
            class="material-icons text-white cursor-pointer"
            @click="$emit('menu-icon-click', (isNavOpenVar = !isNavOpenVar))"
            >menu</i
          >
  
          <img src="@/assets/bluebucks.svg" alt="" class="" />
        </div>
        <div class="flex items-center gap-6">
          <img src="@/assets/IOS.png" alt="" srcset="" class="h-6" />
          <img src="@/assets/android.png" alt="" srcset="" class="h-6" />
          <img src="@/assets/GitHub.png" alt="" srcset="" class="h-6" />
          <i class="material-icons text-white cursor-pointer">api</i>
          <i class="material-icons text-white cursor-pointer">translate</i>
          <i class="material-icons text-white cursor-pointer">maps_home_work</i>
  
          <button class="text-white bg-[#1976d2] px-3 py-2 font-serif rounded-sm">
            <a href="">Login</a>
          </button>
          <button class="text-white bg-[#1976d2] px-3 py-2 font-serif rounded-sm">
            <a href="">Register</a>
          </button>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: "NavigationView",
    prop: ["isNavOpenVar"],
    data() {
      return {};
    },
  };
  </script>
  
  <style></style>