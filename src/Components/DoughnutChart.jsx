import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';



const DoughnutChart = () => {

  const data = {
    labels: ['Food', 'Transport', 'Entertainment', 'Other'],
    datasets: [
        {labels: ['Food', 'Transport', 'Entertainment', 'Other'],
        datasets: [
            {
                data: [300, 100, 200, 400],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            },
        ],        
        
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    radius: '100%',
    width: '100%',
    hoverOffset: 4,
    responsive: true,
   
    defaultFontSize: '14px',
    size: '4000',
    height: '400',
    plugins: {
      tooltip: {
        titleFont: {
          size: 13,
        },
        bodyFont: {
          size: 13,
        },
      },
      legend: {
        display: true,
        responsive: true,
        position: 'right',
        labels: {
          boxWidth: 30,
          padding: 10,
          font: {
            size: 16,
          },
        },
        align: 'center',
      },
    },
  };

  
  ChartJS.register(ArcElement, Tooltip, Legend);


  return <Doughnut style={{ width: '100%' }} data={data} options={chartOptions} />;

};

export default DoughnutChart;
