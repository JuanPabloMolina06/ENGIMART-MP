import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const GraficoTotalVendas = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
      {
        label: 'Total de Vendas',
        data: [30, 20, 50, 40, 60, 70, 90, 100, 80, 110],
        fill: true,
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white p-4 flex flex-col justify-center shadow-md rounded-lg min-w-[40rem] h-64 md:h-80">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Total de Vendas</h2>
        <select className="border rounded-md p-2">
          <option>Diário</option>
          <option>Semanal</option>
          <option>Mensal</option>
        </select>
      </div>
      <div className="h-56">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default GraficoTotalVendas;
