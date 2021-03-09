import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BsGear } from "react-icons/bs";
const electron = window.require('electron')
function App() {
  
  return (
    <div className="App">
      <div className="pl-3 mt-3">
        <BsGear color="white" size="30"></BsGear>
      </div>
      <div className="text-center">
        <h1 className="title"> PlantBoi Dashboard</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <div className="data-container">
              <h4>Temperature</h4>
              <h1>22 °C</h1>
            </div>
          </div>
          <div className="col-6">
            <div className="data-container">
              <h4>Humidity</h4>
              <h1>30%</h1>
            </div>
          </div>
          <div className="col-6">
            <div className="data-container">
              <h4>Luminosity</h4>
              <h1>150 Lux</h1>
            </div>
          </div>
          <div className="col-6">
            <div className="data-container">
              <h4>Happiness</h4>
              <h1>60%</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
