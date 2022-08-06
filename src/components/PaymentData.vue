<template>
  <div :style="{ marginTop: '50%' }">{{ getData.total_amount }}</div>
</template>
<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    let getData = ref([]);
    const route = useRoute();
    const get = route.params.param;
    getData.value = JSON.parse(get);
    let tarif = {
      trf_id: "trf_id",
      trf_name: "trf_name",
      trf_qty: "trf_qty",
      trf_amount: "trf_amount",
      trf_total_amount: "trf_total_amount",
    };
    let validData = {
      booking_number: "booking_number",
      total_amount: 175000,
      booking_note: "booking_note",
      customer_name: "customer_name",
      customer_email: "customer_email",
      customer_phone: "customer_phone",
      tariff_data: tarif,
    };
    function validateRequestData() {
      let validate = [];
      let check = false;
      const booking_number = getData.value.booking_number in validData;
      const total_amount = getData.value.total_amount in validData;
      const booking_note = getData.value.booking_note in validData;
      const customer_name = getData.value.customer_name in validData;
      const customer_email = getData.value.customer_email in validData;
      const customer_phone = getData.value.customer_phone in validData;
      validate.push(
        booking_number,
        total_amount,
        booking_note,
        customer_name,
        customer_email,
        customer_phone
      );

      getData.value.tariff_data.forEach((element) => {
        Object.keys(element).forEach(function eachKey(item) {
          if (item in tarif) {
            check = true;
          } else {
            check = false;
          }
        });
      });
      console.log(check);
      Object.keys(getData.value).forEach(function eachKey(key) {
        if (key in validData && check == true) {
          localStorage.setItem("getData", JSON.stringify(getData.value));
          window.location.href = "http://localhost:8081/payment";
        } else {
          window.location.href = "http://localhost:8081/forbidden";
        }
      });
    }
    onMounted(() => {
      validateRequestData();
    });
    return { getData, get };
  },
};
</script>
