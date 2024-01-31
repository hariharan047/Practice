<template>
    <div :class="[isLeftNavOpen ? 'w-[200px]' : 'w-0']" class="bg-[#eeeeee]">
      <ul>
        <li>
          <div class="flex gap-9 p-3 hover:bg-[#d1d1d1] border-b-2">
            <i class="material-icons cursor-pointer">auto_graph</i>
            <router-link to="dash-board">Dashboard </router-link>
          </div>
        </li>
        <li>
          <div class="flex gap-9 p-3 hover:bg-[#d1d1d1]">
            <i class="material-icons cursor-pointer">speaker_notes</i>
            <router-link to="inbound-view">Inbound</router-link>
          </div>
        </li>
        <li>
          <div class="flex gap-9 p-3 hover:bg-[#d1d1d1]">
            <i class="material-icons cursor-pointer">rv_hookup</i>
            <router-link to="outbound-view">Outbound</router-link>
          </div>
        </li>
        <li>
          <div class="flex gap-9 p-3 hover:bg-[#d1d1d1]">
            <i class="material-icons cursor-pointer">devices_other</i>
            <router-link to="finance-view">Finance</router-link>
          </div>
        </li>
        <li>
          <div class="flex gap-9 p-3 hover:bg-[#d1d1d1]">
            <i class="material-icons cursor-pointer">shop</i>
            <router-link to="goods-list">GoodsList</router-link>
          </div>
        </li>
        <li>
          <div class="flex gap-9 p-3 hover:bg-[#d1d1d1]">
            <i class="material-icons cursor-pointer">info</i>
            <router-link to="base-info">Base Info</router-link>
          </div>
        </li>
        <li>
          <div class="flex gap-9 p-3 hover:bg-[#d1d1d1]">
            <i class="material-icons cursor-pointer">settings</i>
            <router-link to="warehouse-view">WareHouse</router-link>
          </div>
        </li>
        <li>
          <div class="flex gap-9 p-3 hover:bg-[#d1d1d1]">
            <i class="material-icons cursor-pointer">warehouse</i>
            <router-link to="ware-inter" class="text-justify">Warehouse Interconnection</router-link>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "LeftNavigationView",
    props: ["isLeftNavOpen"],
    data() {
      return {};
    },
  };
  </script>
  
  <style></style>