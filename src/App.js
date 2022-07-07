import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import CryptoList from "./Components/CryptoList/CryptoList";
import Footer from "./Components/ui/Footer";


function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<CryptoList/>} exact />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
