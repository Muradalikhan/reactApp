
import './App.css';
import { useState } from 'react';
import { userData } from './components/Data';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import DoughnutChart from './components/DoughnutChart';



function App() {
  const [chartData, setChartData] = useState({
    labels: userData.map((data) => data.year),
    datasets: [
      {
        label: "profit",
        data: userData.map((data) => data.profit),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="App">
      <div className='item'>
        <div style={{ width: 500 }}>
          <BarChart chartData={chartData} />
        </div>
        <div style={{ width: 500 }}>
          <LineChart chartData={chartData} />
        </div>
      </div>

      <div className='item'>
        <div style={{ width: 300 }}>
          <PieChart chartData={chartData} />
        </div>
        <div style={{ width: 300 }}>
          <DoughnutChart chartData={chartData} />
        </div>
      </div>

    </div>
  );
}

export default App;
