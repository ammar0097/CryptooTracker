import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CoinPage from "./Pages/CoinPage";
import Header from "./Components/Header";
import CryptoList from "./Components/CryptoList/CryptoList";


function App() {
  
  return (
    <div className="app">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </Router>
      <CryptoList/>
    </div>
  );
}

export default App;
