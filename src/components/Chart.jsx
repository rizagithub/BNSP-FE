import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function PieChart() {
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
        type: 'pie',
        data: {
          labels: ['User', 'Data', 'Aplikasi'],
          datasets: [
            {
              data: [30, 50, 100],
              backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
            },
          ],
        },
      });
    }
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return <canvas ref={chartRef} />;
}

export default PieChart;
