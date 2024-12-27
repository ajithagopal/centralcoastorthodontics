import React from 'react'
import ComeVisitUs from './components/ComeVisitUs'
import Footer from './components/footer'
import About from './components/About'
import FreeConsult from './components/FreeConsult'
import ExperienceCare from './components/ExperienceCare'
import GetToKnowUs from './components/GetToKnowUs'
import AboutInvisalign from './components/AboutInvisalign'
import { Buttons } from './components/Buttons'
import InvisalignProvider from './components/InvisalignProvider'
import Location from './components/Location'
import LocationSubComponents from './components/LocationSubComponents'
import YourFirstVisit from './components/YourFirstVisit'

export default function App() {
  return <>
  <AboutInvisalign/>
  <Buttons/>
  <InvisalignProvider/>
  <Location/>
  <LocationSubComponents/>
  <YourFirstVisit/>
  <About/> 
   <FreeConsult/>
   <GetToKnowUs/>
  <ExperienceCare/> 
  <ComeVisitUs/>
 <Footer/>  
  </>
}
