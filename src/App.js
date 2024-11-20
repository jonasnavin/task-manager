import React from 'react'
import './App.css'
// import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import { DataProvider } from './context/DataContext'

const App = () => {
  return (
    <DataProvider>
      {/* <Header /> */}
      <Main />
      <Footer />
    </DataProvider>
  )
}

export default App