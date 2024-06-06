<template>
  <Pie :data="data" :options="options" />
</template>

<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "vue-chartjs";

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: "App",
  components: {
    Pie,
  },
  data() {
    return {
      data: {
        labels: [
          "Borrowed Books",
          "Returned Books",
          "Overdue Books",
          "Visitors",
          "New Members",
          "Missing Books",
          "Total Books",
        ],
        datasets: [
          {
            backgroundColor: [
              "#2E86C1",
              "#F1948A",
              "#707B7C",
              "#28B463",
              "#A04000",
              "#7D3C98",
              "#F1C40F",
            ],
            data: [205, 246, 45, 109, 55, 72, 253],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
};
</script>
