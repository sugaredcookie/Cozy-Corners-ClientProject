import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Estimate from "./Pages/Estimate";
import FinalEstimate from "./Pages/FinalEstimate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/estimate" element={<Estimate />} />
        <Route path="/final-estimate" element={<FinalEstimate />} />
      </Routes>
    </Router>
  );
}

export default App;