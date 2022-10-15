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
        <Route path="/TORNTPOWER" element={<Instruments />} />
          <Route path="/TECHM" element={<Instruments />} />
          <Route path="/IDBI" element={<Instruments />} />
          <Route path="/GRASIM" element={<Instruments />} />
          <Route path="/BHARATFIN" element={<Instruments />} />
          <Route path="/OFSS" element={<Instruments />} />
          <Route path="/KAJARIACER" element={<Instruments />} />
          <Route path="/INDIGO" element={<Instruments />} />
          <Route path="/ENGINERSIN" element={<Instruments />} />
          <Route path="/SBIN" element={<Instruments />} />
          <Route path="/LALPATHLAB" element={<Instruments />} />
          <Route path="/AARTIIND" element={<Instruments />} />
          <Route path="/IPCALAB" element={<Instruments />} />
          <Route path="/INDUSTOWER" element={<Instruments />} />
          <Route path="/BIOCON" element={<Instruments />} />
          <Route path="/ADANIPOWER" element={<Instruments />} />
          <Route path="/CENTURYTEX" element={<Instruments />} />
          <Route path="/DIVISLAB" element={<Instruments />} />
          <Route path="/INFIBEAM" element={<Instruments />} />
          <Route path="/HAVELLS" element={<Instruments />} />
          <Route path="/" element={<Table />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
