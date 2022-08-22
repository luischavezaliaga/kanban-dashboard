<template>
  <div class="flex justify-center h-full items-center mx-auto">
    <OrderConfirmCard
      class="w-96"
      :title="summary.title"
      :description="summary.description"
      :plan="summary.plan"
      :price="summary.price"
      :billing-period="summary.billingPeriod"
      confirm-button-text="Proceed to Payment"
      cancel-button-text="Cancel Order"
    ></OrderConfirmCard>
  </div>
</template>
<script setup lang="ts">
import OrderConfirmCard from "./components/OrderConfirmCard.vue";
import { reactive } from "vue";

const summary = reactive({
  title: "Order Summary",
  description:
    "You can now listen to millions of songs, audiobooks, and podcasts on ny device anywhere you like",
  plan: "Montly Plan",
  price: 19.99,
  billingPeriod: "month"
});
</script>
