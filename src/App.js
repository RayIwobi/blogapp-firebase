import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/portfolio/Home';
import Projects from './Components/portfolio/Projects';
import About from './Components/portfolio/About';
import Contact from './Components/portfolio/Contact';
// import LoadMore from './Components/loadmoretest/LoadMore';
import ScrollToTop from './Components/portfolio/ScrollToTop'
import Navigation from './Components/portfolio/Navigation';
import MyExperience from './Components/portfolio/MyExperience';

function App() {
  return (
    <>
    <Router>
      <ScrollToTop />
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/experience' element={<MyExperience/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
