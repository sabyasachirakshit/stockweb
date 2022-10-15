import "./App.css";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import Instruments from "./components/Instruments";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/TECHM" element={<Instruments />} />
          <Route path="/IDBI" element={<Instruments />} />
          <Route path="/" element={<Table />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
