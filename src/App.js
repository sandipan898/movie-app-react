import { Routes, Route } from "react-router-dom";
import Header from './common/Header';
import Footer from './common/Footer';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import './App.css';

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
      </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
