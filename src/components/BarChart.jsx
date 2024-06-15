import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function BarChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Ensure chartRef.current is not null before accessing getContext
    if (chartRef.current) {
      const myChartRef = chartRef.current.getContext('2d');

      // Destroy existing chart instance if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Create new Chart.js instance
      chartInstance.current = new Chart(myChartRef, {
        type: 'bar',
        data: {
          labels: ["Senin","Selasa","Rabu","Kamis","Jumat","Sabtu","Minggu"],
          datasets: [{
            label: 'Website Visited',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },
      });
    }
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return <canvas ref={chartRef} />;
}

export default BarChart;
