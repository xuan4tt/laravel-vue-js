<template>
    <TheHeader />
  <div class="container-fluid mt-3">
    <div class="row">
      <div class="col-sm-3 d-none d-sm-flex">
        <a-list bordered :data-source="data">
          <template #header>
            <div>Header</div>
          </template>

        </a-list>
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

