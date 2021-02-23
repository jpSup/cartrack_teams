import React from 'react'
import ReactDOM from 'react-dom'

import { useRoutes } from "hookrouter"
import routes from "./components/Router/router"

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import './index.css';

const App = () => {
  const routeResult = useRoutes(routes);

  return ( 
    <React.StrictMode>
      <Header />
        { routeResult }
      <Footer />      
    </React.StrictMode>    
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

