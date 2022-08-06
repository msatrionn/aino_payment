import { createApp } from "vue";
import App from "./App.vue";
import PaymentStatus from "./components/PaymentStatus.vue";
import PaymentStatusQR from "./components/PaymentStatusQR.vue";
import PaymentStatusOVO from "./components/PaymentStatusOVO.vue";
import Payment from "./components/Payment.vue";
import PaymentBar from "./components/PaymentBar.vue";
import PaymentData from "./components/PaymentData.vue";
import Forbidden from "./components/ForbiddenPage.vue";
import { createWebHistory, createRouter } from "vue-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

const routes = [
  { path: "/payment", component: Payment },
  { path: "/bar", component: PaymentBar },
  { path: "/status", component: PaymentStatus },
  { path: "/status/qrcode", component: PaymentStatusQR },
  { path: "/status/ovo", component: PaymentStatusOVO },
  { path: "/payment_data/:param", component: PaymentData },
  { path: "/forbidden", component: Forbidden },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
createApp(App).use(router).mount("#app");
