// App.jsx
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HeroSection from './components/heroSection/HeroSection.jsx';
import DestinationSection from './components/destinationSection/DestinationsSection.jsx';
import ContactForm from './components/contact/ContactForm.jsx';
import Error from './components/error/Error.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<HeroSection/>} />
        <Route path="/destinations" element={<DestinationSection/>} />
        <Route path="/contact" element={<ContactForm/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
