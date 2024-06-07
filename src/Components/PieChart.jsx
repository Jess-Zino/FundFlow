import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const pieData = {
        labels: ['Food', 'Transport', 'Entertainment', 'Other'],
        datasets: [
            {
                data: [300, 100, 200, 400],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            },
        ],
        borderWidth: 1,
    };
    const opt = {
       
        width: '100px',
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
    
    return <Pie data={pieData} redraw={true} width="80px" options={opt}/>;
};


export default PieChart
