import './styles/main.scss'
import Header from './components/Header'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Events from './components/Events'
import Footer from './components/Footer'

import React from 'react';

function App() {

  return (
    <>
      <Header />
      <main className="home">
        <Hero />
        <Programs />
        <Events />
      </main>
      <Footer />
    </>
  )
}

export default App