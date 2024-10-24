import React from 'react'
import HeroSection from './components/HeroSection'
import {useProductContext} from'./contexts/productcontexts'
const AboutUs = () => {

  const myName=useProductContext();
  const data={
    name:"Baani Ecommerce",
  };
  return (
    <>
    {myName}
    <HeroSection myData={data}/>
    </>
  )
}

export default AboutUs