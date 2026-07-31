import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Welcome from './components/Welcome';
import Project from './components/Projects';
import Technologies from './components/Technologies';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#06080F] text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-300 antialiased overflow-x-hidden">
        <Nav />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route
            path="/project"
            element={
              <div className="pt-24 min-h-screen">
                <Project />
                <Footer />
              </div>
            }
          />
          <Route
            path="/technologies"
            element={
              <div className="pt-24 min-h-screen">
                <Technologies />
                <Footer />
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div className="pt-24 min-h-screen">
                <About />
                <Footer />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
