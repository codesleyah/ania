import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function StackedBarChart2(){
  const data = {
    labels: ['Branch 1', 'Branch 2', 'Branch 3', 'Branch 4', 'Branch 5' ],
    datasets: [
      {
        label: 'PAR > 1',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56],
      },
      {
        label: 'PAR > 30',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [30, 40, 60, 50, 25],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
        position: 'top',
        },
        title: {
        display: true,
        text: 'PAR per Branch',
        },
    },
    scales: {
      x: { stacked: true },
      y: { stacked: true },
    },
  };

  return (
    <Bar data={data} options={options}  height={100}/>
  )
};

