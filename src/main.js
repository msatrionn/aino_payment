import { createApp } from "vue";
import App from "./App.vue";
import PaymentStatus from "./components/PaymentStatus.vue";
import PaymentStatusQR from "./components/PaymentStatusQR.vue";
import PaymentStatusOVO from "./components/PaymentStatusOVO.vue";
import Payment from "./components/Payment.vue";
import PaymentData from "./components/PaymentData.vue";
import { createWebHistory, createRouter } from "vue-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

const routes = [
  { path: "/payment", component: Payment },
  { path: "/status", component: PaymentStatus },
  { path: "/status/qrcode", component: PaymentStatusQR },
  { path: "/status/ovo", component: PaymentStatusOVO },
  { path: "/payment_data/:param", component: PaymentData },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
createApp(App).use(router).mount("#app");
