<template>
  <nav
    class="navbar fixed-top navbar-expand-lg navbar-light bg-light"
    id="navbar"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img :src="require('@/assets/twc.png')" class="imgs" alt=""
      /></a>

      <span class="navbar-text"
        ><img :src="require('@/assets/LogoAino.svg')" class="imgs" alt="" />
      </span>
    </div>
  </nav>
  <router-view></router-view>
  <!-- <Payment /> -->
  <div class="bg-primary footer pt-4">
    <div class="container">
      <div class="row col-md-12 footer-divide">
        <div class="col-md-4">
          <img
            :src="require('@/assets/twc_putih.svg')"
            class="imgs_footer"
            alt=""
          />
        </div>
        <div class="col-md-4 text-center">
          Powered By
          <img
            :src="require('@/assets/ainowhite.png')"
            class="imgs_socmed"
            alt=""
          />
        </div>
        <div class="col-md-4 text-end">
          <div class="flex">
            <img
              :src="require('@/assets/social/instagram.svg')"
              class="imgs_socmed"
              alt=""
            />
            <img
              :src="require('@/assets/social/Facebook.svg')"
              class="imgs_socmed"
              alt=""
            />
            <img
              :src="require('@/assets/social/Linkedin.svg')"
              class="imgs_socmed"
              alt=""
            />
            <img
              :src="require('@/assets/social/Youtube.svg')"
              class="imgs_socmed"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr class="hr_divider" />
      <div
        class="row footer-divide d-flex align-items-center align-content-center"
      >
        <span class="copy my-4 mt-2">
          © 2022 Aino Indonesia (PT Aino Indnonesia). All rights reserved.
        </span>
      </div>
    </div>
  </div>
</template>
<style>
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  height: 100vh;
}
</style>
<script>
import { onMounted } from "vue";
// import Payment from "./components/Payment.vue";
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    // Payment,
    // HelloWorld,
    // TwcLogo,
  },
  data() {
    return {
      TwcLogo: require("./assets/twc.png"),
    };
  },
  setup() {
    onMounted(() => {
      console.log(localStorage.getItem("getData"));
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  background: #f0f2f3;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.data {
  min-height: 80vh;
}
#navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 60px;
  gap: 1193px;
  height: 95px;
  left: 0px;
  top: 0px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(11, 93, 111, 0.25);
}
.imgs {
  height: 50px;
}
.imgs_footer {
  height: 40px;
}
.footer {
  width: 100%;
  display: flex;
  align-content: center;
  align-items: center;
}
.footer-divide {
  color: #ffffff;
  align-items: center;
}
.copy {
  text-align: center;
  color: #ffffff;
  font-weight: 600;
}
.hr_divider {
  border: 1px solid #ffffff;
}
.imgs_socmed {
  height: 30px;
  margin: 0 10px;
}
</style>
