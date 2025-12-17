import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import MenuDetail from './pages/MenuDetail';
import Saveurs from './pages/Saveurs';
import SansCalifornia from './pages/SansCalifornia';
import Prix from './pages/Prix';
import Extremes from './pages/Extremes';
import './App.css';

/**
 * Composant principal de l'application SushiFast
 * Gère le routage et la structure générale
 */
function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/menu/:id" element={<MenuDetail />} />
            <Route path="/saveurs" element={<Saveurs />} />
            <Route path="/sans-california" element={<SansCalifornia />} />
            <Route path="/prix" element={<Prix />} />
            <Route path="/extremes" element={<Extremes />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
