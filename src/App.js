import DailyPlot from "./components/DailyPlot";
import { useState } from "react";
import rawData from "./petr4.json";

function App() {

  const [chartData, setChartData] = useState({
    labels: rawData.map((datum) => datum.index),
    datasets: [{
        label: 'Open',
        data: rawData.map((datum) => parseFloat(datum.open)),
        fill: false,
        backgroundColor: "#0c50f1aa",
    }, {
        label: 'Close',
        data: rawData.map((datum) => parseFloat(datum.close)),
        fill: false,
        backgroundColor: "#f10c50aa"
    }] 
  });

  // console.log(chartData.datasets[0].data);

  return (
    <div className="App" style={{ height: 200, width: 800 }}>
      <DailyPlot chartData={chartData}/>;
    </div>
  )
}

export default App;