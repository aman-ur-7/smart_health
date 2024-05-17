// src/components/TimeSeriesDashboard.js
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const TimeSeriesDashboard = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Time Series Data",
        data: [],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        fill: true,
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      updateChartData();
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  const updateChartData = () => {
    setChartData((prevData) => {
      const now = new Date();
      const newLabels = [...prevData.labels, now.toLocaleTimeString()];
      const newData = [...prevData.datasets[0].data, Math.random() * 100];

      return {
        ...prevData,
        labels: newLabels.slice(-10), // Keep only the last 10 data points
        datasets: [
          {
            ...prevData.datasets[0],
            data: newData.slice(-10),
          },
        ],
      };
    });
  };

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default TimeSeriesDashboard;
