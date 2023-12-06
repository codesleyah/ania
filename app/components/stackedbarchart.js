import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function StackedBarChart(){
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May' , 'Jun' , 'Jul' , 'Aug' , 'Nov' , 'Dec'],
    datasets: [
      {
        label: 'Principal',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56, 65, 59, 80, 81, 56,65, 59],
      },
      {
        label: 'Accrued Interest',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [30, 40, 60, 50, 25, 30, 40, 60, 50, 25, 30, 40],
      },
    ],
  };

  const options = {
    plugins: {
        legend: {
        position: 'top',
        },
        title: {
        display: true,
        text: 'Outstanding Loan Balance',
        },
    },
    scales: {
      x: { stacked: true },
      y: { stacked: true },
    },
  };

  return (
    <Bar data={data} options={options} />
  )
};

