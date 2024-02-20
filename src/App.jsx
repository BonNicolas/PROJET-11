import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../src/pages/Home/home'
import SignIn from '../src/pages/Sign-In/sign-in'
import Header from '../src/layouts/Header/header'
import Footer from '../src/layouts/Footer/footer'
import Error from '../src/pages/Error/error'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
