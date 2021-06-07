import React from 'react'
import {Doughnut} from 'react-chartjs-2';


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
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 206, 86)',
          // 'rgb(75, 192, 192)',
          // 'rgb(153, 102, 255)',
          // 'rgb(255, 159, 64)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 206, 86)',
        // 'rgb(75, 192, 192)',
        // 'rgb(153, 102, 255)',
        // 'rgb(255, 159, 64)'
    ],
        borderWidth: 2,
        data: _data,
      }
    ]
  }
  
export default function EarningsOverview() {
    return (
      // <div style={{ height: "100%" }}>        
    <Doughnut
        data={state}
        options={{
          title: {
            display: true,
            text: "",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "",
          },
        }}
      />
    )
}
