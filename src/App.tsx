// import { useState } from 'react'
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="position-relative">
      <Header />
      <div className="vh-100">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
