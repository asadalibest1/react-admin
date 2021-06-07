import React from 'react'
import {Line} from 'react-chartjs-2';


const label = [
    'label[3]',
    'label[5]',
    'label[4]',
    'label[3]',
    'label[5]',
    'label[4]'
  ];
  
  const _data = [639, 465, 493, 478, 589, 632, 674];
  
  const state = {
    labels: label,
    datasets: [
      {
        label: 'Virus spread',
      backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          // 'rgba(75, 192, 192, 0.2)',
          // 'rgba(153, 102, 255, 0.2)',
          // 'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        // 'rgba(75, 192, 192, 1)',
        // 'rgba(153, 102, 255, 1)',
        // 'rgba(255, 159, 64, 1)'
    ],
        borderWidth: 2,
        data: _data,
      }
    ]
  }
  
export default function EarningsOverview() {
    return (                
    <Line
        data={state}
        options={{
          title: {
            display: true,
            text: "",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    )
}
