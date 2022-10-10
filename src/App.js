import logo from './logo.svg';
import Main from './components/pages/Main';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Routers from './components/pages/Routers';
import { Routes, Route, Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Search from './components/pages/Search';

function App() {
  return (
    <>     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
