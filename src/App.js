import "./App.css";
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CoinPage from "./Pages/CoinPage";
import Header from "./Components/Header";



=======
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CoinPage from "./Pages/CoinPage";
import Header from "./Components/Header";
>>>>>>> 359ccb76d518edfeea9b7553ddb6c6f1b4dc4474

function App() {
  
  return (
<<<<<<< HEAD
    <div className="app">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/coins/:id" element={<CoinPage />} />
=======
    <div className="App">
      <Header/>
      <Router>
        <Routes>
        <Route path="/" element={<HomePage/>} exact />
        <Route path="/coins/:id" element={<CoinPage/>} />
>>>>>>> 359ccb76d518edfeea9b7553ddb6c6f1b4dc4474
        </Routes>
      </Router>
    </div>
  );
}

export default App;
