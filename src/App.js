import { Routes, Route } from "react-router-dom";
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import AboutPage from './pages/AboutPage';
import './App.css';
import TrendingPages from "./pages/TrendingPages";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="dashboard" element={ <DashboardPage /> } />
        <Route path="trending" element={ <TrendingPages /> } />
        <Route path="about" element={ <AboutPage /> } />
      </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
