import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AllRouting } from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AllRouting />
      </BrowserRouter>
    </div>
  );
}

export default App;
