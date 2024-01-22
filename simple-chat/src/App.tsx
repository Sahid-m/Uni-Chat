import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ChatPage from './Pages/ChatPage';
import HomePage from './Pages/HomePage';
import Navbar from './components/Navbar';

function App() {
  
  
  
  

  

  
      



  return (
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path="/chat" Component={ChatPage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
