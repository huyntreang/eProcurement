import React from 'react'
import './home.css'
import './grid.css'
import './header.css'
import Header from './Components/Header'
import Navigation from './Components/Navigation'
import ProductsPurchase from './Components/ProductsPurchase'
import PurchasePlanList from './Components/PurchasePlanList'

const App = () => {

  return (
    <>
      <Header/>
      <Navigation/>
      <ProductsPurchase/>
      <PurchasePlanList/>
    </>
  )
}

export default App

