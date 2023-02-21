<template>
  <div class="container-fluid">
    <div class="row text-white align-items-center" style="background-color: darksalmon;padding: 1rem">
      <div class="col-1 d-flex d-sm-none align-items-center">
          <span @click="showDrawer()">X</span>
      </div>
      <div class="col-10 col-sm-9 d-flex align-items-center justify-content-center justify-content-sm-start">
        <img src="https://cdn.pixabay.com/photo/2016/06/29/16/36/logo-1487245_1280.png" height="30" width="40" style="object-fit: cover" alt="">
        <span class="d-none d-sm-flex">Quan tri</span>
      </div>
      <div class="col-sm-3 d-none d-sm-flex align-items-center justify-content-sm-end">
        <span>Admin</span>
      </div>
      <div class="col-1 d-flex d-sm-none align-items-center">
        <span @click="showDrawerRight()">X</span>
      </div>
    </div>
  </div>

  <a-drawer
      v-model:visible="visible"
      class="custom-class"
      style="color: red"
      title="Basic Drawer"
      placement="left"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
  <a-drawer
      v-model:visible="visible_right"
      class="custom-class"
      style="color: #a78989"
      title="Basic Drawer"
      placement="right"
  >
    <p>Some contents 1..</p>
    <p>Some contents 2..</p>
    <p>Some contents 3..</p>
  </a-drawer>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const visible = ref(false);
    const showDrawer = () => {
      visible.value = true;
    };

    const visible_right = ref(false);
    const showDrawerRight = () => {
      visible_right.value = true;
    };

    return {
      visible,
      visible_right,
      showDrawer,
      showDrawerRight
    };
  },
});
</script>