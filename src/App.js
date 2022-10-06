import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/partials/Navbar';
import Home from './components/routes/Home';
import Teams from './components/routes/Teams';
import TeamDetails from './components/routes/TeamDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/:teamId" element={<TeamDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
