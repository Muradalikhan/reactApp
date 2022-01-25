
import './App.css';
import { useState } from 'react';
import { userData } from './components/Data';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';



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
       <div style={{ width: 700 }}>
        <BarChart chartData={chartData} />
      </div>
       <div style={{ width: 700 }}>
        <LineChart chartData={chartData} />
      </div>
       <div style={{ width: 700 }}>
        <PieChart chartData={chartData} />
      </div>
    </div>
  );
}

export default App;
