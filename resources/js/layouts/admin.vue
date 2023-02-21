<template>
    <TheHeader />
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-3 d-none d-sm-flex">
        Side bar
      </div>
      <div class="col-12 col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "../components/header.vue";
export default {
  components: {
    TheHeader
  },
  // setup() {
  //   const Click = () => {
  //     alert("Click")
  //   }
  //   return {
  //     Click
  //   }
  // }
}

</script>

