<template>
  <div :style="{ marginTop: '50%' }">{{ getData }}</div>
</template>
<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    let getData = ref([]);
    const route = useRoute();
    const get = route.params.param;
    getData.value = get;
    function validateRequestData() {
      if (get == "google") {
        window.location.href = "http://google.com";
      }
    }
    onMounted(() => {
      validateRequestData();
    });
    return { getData, get };
  },
};
</script>
