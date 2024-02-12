import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Portfolio from './Pages/Portfolio';
import Team from './Pages/Team';
import YourComponent from './Chat';

function App() {
  return (
    <div className="App">
      <Home/>
      <YourComponent/>
      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/team' element={<Team/>} />
    
</Routes>
    </BrowserRouter> */}
    </div>
  );
}

export default App;
