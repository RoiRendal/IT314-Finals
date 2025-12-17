import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CatDetail from './pages/CatDetail';
import Quiz from './pages/Quiz';
import AddCat from './pages/AddCat';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-100 text-stone-800">
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cat/:id" element={<CatDetail />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/add" element={<AddCat />} />
          <Route path="/edit/:id" element={<AddCat />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
