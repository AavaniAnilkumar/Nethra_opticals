
import './App.css';
import Dashboard from './Components/dashboard/dashboard';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import AboutPage from './Components/About/about';
import ContactPage from './Components/Contact/contact';
import PhotoGallery from './Components/Photo_Gallery/photo_gallery';
import CareerPage from './Components/Career/career';

function App() {
  return (
    // <div className="App">
    //   <Dashboard />
    // </div>

    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/photo-gallery' element={<PhotoGallery/>}/>
        <Route path='/careers' element={<CareerPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
