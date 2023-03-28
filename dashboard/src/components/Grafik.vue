<template>
  <div>
    <h1>Grafik</h1>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import axios from 'axios';
import { Chart } from 'chart.js/auto';

export default {
  mounted() {
    // Ambil data dari server
    axios
      .post('/', {
        query: `
          query {
            grafik {
              labels
              data
            }
          }
        `,
      })
      .then(response => {
        // Buat grafik dengan Chart.js
        new Chart(this.$refs.canvas.getContext('2d'), {
          type: 'bar',
          data: {
            labels: response.data.data.grafik.labels,
            datasets: [
              {
                label: 'Data',
                data: response.data.data.grafik.data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          },
        });
      });
  },
};
</script>
