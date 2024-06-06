<template>
  <Line :data="data" :options="options" />
</template>

<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "App",
  components: {
    Line,
  },
  data() {
    return {
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "Returned",
            backgroundColor: "#f87979",
            data: [10, 30, 20, 40, 29, 50, 40, 25, 46, 17, 30, 57],
            borderColor: "red",
            tension: 0.4,
          },
          {
            label: "Borrowed",
            backgroundColor: "green",
            borderColor: "green",
            data: [20, 49, 30, 43, 39, 68, 40, 30, 50, 20, 40, 59],
            tension: 0.4,
          },
        ],
      },
    };
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
};
</script>
