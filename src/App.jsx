import "./App.css";
import Cursive from "./Pages/Cursive";
import Display from "./Pages/Display";
import Monospace from "./Pages/Monospace";
import SansSerif from "./Pages/SansSerif";
import Serif from "./Pages/Serif";
import Slab from "./Pages/Slab";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import { useEffect, useState } from "react";
import FontDetails from "./components/FontDetail/FontDetails";

function App() {
  const [fonts, setFonts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch("/data.json")
            const jsonData = await response.json()
            setFonts(jsonData)
        } catch (error) {
            console.error("Error fetching font data:", error);
        }
    }
    fetchData()
}, [])

  // Проверка, загружены ли данные
  if (fonts.length === 0) {
    // Можно добавить загрузочный индикатор или другую обработку ожидания данных
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursive" element={<Cursive fonts={fonts}/>} />
          <Route path="/display" element={<Display fonts={fonts}/>} />
          <Route path="/monospace" element={<Monospace fonts={fonts}/>} />
          <Route path="/sansserif" element={<SansSerif fonts={fonts}/>} />
          <Route path="/serif" element={<Serif fonts={fonts}/>} />
          <Route path="/slab" element={<Slab fonts={fonts}/>} />
          <Route path="/fontdetails/:fontId"  element={<FontDetails fonts={fonts} />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
