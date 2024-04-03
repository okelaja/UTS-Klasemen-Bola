// import './App.css';
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Standings from "./pages/page/Standings";
import Contact from "./pages/page/Contact";
import Detail from "./pages/page/Detail";
import Login from "./pages/page/Login";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/standings" element={<Standings />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
