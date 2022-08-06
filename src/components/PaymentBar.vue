<template>
  <div class="wrap">
    <div id="myProgress" v-for="(get, index) in data" :key="index">
      <div id="myBar" :style="{ width: `${get.persen}%` }">
        {{ get.persen }}%
      </div>
    </div>
  </div>
</template>
<style>
.wrap {
  margin-top: 10%;
}
#myProgress {
  width: 100%;
  background-color: #ddd;
  border-radius: 20px 20px 20px 20px;
}

#myBar {
  height: 30px;
  background-color: #04aa6d;
  text-align: center;
  line-height: 30px;
  color: white;
  border-radius: 20px 20px 20px 20px;
  background-image: linear-gradient(to right, red, yellow);
}
</style>
<script>
// import axios from "axios";
import { onMounted, ref } from "vue";
export default {
  setup() {
    let data = [
      { id: 1, persen: 25 },
      { id: 2, persen: 50 },
    ];
    let percent = ref(0);
    function upPercent() {
      data.map((item) => {
        percent.value = item.persen;
        console.log(item.persen);
      });
    }

    onMounted(() => {
      upPercent();
    });
    return {
      percent,
      data,
    };
  },
};
</script>
