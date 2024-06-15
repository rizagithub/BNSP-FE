import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function LineChart() {
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
        type: 'line',
        data: {
          labels: ['2020', '2021', '2022', '2023', '2024'], // Adjusted labels to match data length
          datasets: [{
            label: 'Dataset',
            data: [60, 40, 50, 75, 90], // Adjusted data to match labels length
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }],
        },
      });
    }
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return <canvas ref={chartRef} />;
}

export default LineChart;
