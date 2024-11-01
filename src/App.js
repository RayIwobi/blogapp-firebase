import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CalculatorNav from './Components/CalculatorNav';
import Calculator from './Components/Calculator';
import Lottie from 'lottie-react'
import animo from './Components/assets/animo.json'
import Notie from './Components/Notie'



function App() {
  return (
    <>
    <Router>
    
      <CalculatorNav />
      <Notie/>
      <Routes>
        <Route path='/' element={<Calculator />} />
      </Routes>
      <Lottie animationData={animo} style={{width:'300px', height:'300px'}} />
      
    </Router>
    </>
  );
}

export default App;
