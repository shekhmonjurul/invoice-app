import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Sales',
      data: [12000, 19000, 3000, 5000, 20000, 24000],
      borderColor: '#4ade80',
      backgroundColor: 'rgba(74, 222, 128, 0.2)',
      fill: true,
      tension: 0.4,
    },
    {
      label: 'Expenses',
      data: [8000, 12000, 2500, 4000, 15000, 18000],
      borderColor: '#f87171',
      backgroundColor: 'rgba(248, 113, 113, 0.2)',
      fill: true,
      tension: 0.4,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: '#fff',
      },
    },
    tooltip: {
      backgroundColor: '#1f2937',
      titleColor: '#fff',
      bodyColor: '#ddd',
    },
  },
  scales: {
    x: {
      ticks: { color: '#ccc' },
      grid: { color: 'rgba(255, 255, 255, 0.1)' },
    },
    y: {
      ticks: { color: '#ccc' },
      grid: { color: 'rgba(255, 255, 255, 0.1)' },
    },
  },
};

export default function SalesExpensesChart() {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-xl shadow-xl">
      <h2 className="text-xl font-semibold mb-6">Sales vs Expenses</h2>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Chart Section */}
        <div className="flex-1">
          <Line data={chartData} options={chartOptions} />
        </div>

        {/* Summary Boxes */}
        <div className="w-full lg:w-1/4 flex flex-col gap-4">
          <div className="bg-green-700 text-white p-4 rounded-xl shadow-md">
            <p className="text-sm">Total Sales</p>
            <h3 className="text-2xl font-bold">$110,000</h3>
          </div>
          <div className="bg-blue-700 text-white p-4 rounded-xl shadow-md">
            <p className="text-sm">Total Receipts</p>
            <h3 className="text-2xl font-bold">$95,000</h3>
          </div>
          <div className="bg-red-700 text-white p-4 rounded-xl shadow-md">
            <p className="text-sm">Total Expenses</p>
            <h3 className="text-2xl font-bold">$72,000</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
