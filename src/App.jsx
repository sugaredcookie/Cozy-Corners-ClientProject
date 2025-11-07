import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Estimate from "./Pages/Estimate";
import FinalEstimate from "./Pages/FinalEstimate";
import Gallery from "./Pages/Gallery";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/estimate" element={<Estimate />} />
        <Route path="/final-estimate" element={<FinalEstimate />} />
      </Routes>
    </Router>
  );
}

export default App;