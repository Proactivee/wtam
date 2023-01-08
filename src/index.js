import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home/'
import Footer from './components/Footer'
import GlobalStyle from './utils/style/GlobalStyle'
import FontStyles from './fonts/FontStyles'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <FontStyles />
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/wtam" element={<Home />}></Route>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
