import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Admin from "./components/Admin";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
