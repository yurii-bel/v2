import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ProjectContextProvider from "./context/ProjectContext";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <ProjectContextProvider>
      <Router>
        {loading ? (
          <div className="loader-container"></div>
        ) : (
          <div className="container mx-auto">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/projects" element={<Projects />} /> */}
            </Routes>
            <Footer />
          </div>
        )}
      </Router>
    </ProjectContextProvider>
  );
}

export default App;
