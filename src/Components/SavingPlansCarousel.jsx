import React from 'react';
import { Carousel } from 'antd';
import Bento from './Bento';
import DialGauge from './Dialguage';


const SavingPlansCarousel = () => {
  return (
    <Carousel arrows autoplay  effect="fade" className='w-[40vw] h-[40vh]flex items-center justify-center text-center rounded-xl'>
    
    <Bento className="rounded-xl" size={42} height={41.5} content={<div><h1>Savings Goals</h1><DialGauge  maxValue={1000} value={200}/></div>}/>
    <Bento size={42.8} height={41.5} content={<div><h1>Savings</h1><DialGauge  maxValue={1000} value={80}/></div>}/>
    <Bento size={42.8} height={41.5} content={<div><h1> Goals</h1><DialGauge  maxValue={1000} value={900}/></div>}/>
    <Bento size={42.8} height={41.5} content={<div><h1>Savis</h1><DialGauge  maxValue={1000} value={1000}/></div>}/>
  </Carousel>
  )
}

export default SavingPlansCarousel

