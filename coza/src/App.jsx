import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from './assets/components/Header';
import Slider from './assets/components/Slider';
import Banner from './assets/components/Banner';
import Footer from './assets/components/Footer';  

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Slider/>
      <Banner/>
      <Footer/>
    </>
  )
}


export default App
