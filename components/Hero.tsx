import Image from 'next/image'
import React from 'react'


const Hero = () => {
  return (
    <section className=" max-container padding-container flex flex-col-reverse gap-20 pb-24 md:gap-10 lg:pt-64  xl:flex-row">
      <div className="font-Playfair-Display regular-32">
      <h1 >When it feels scary to jump, that is exactly when you jump</h1>
      <h1 className='opacity-40'>Otherwise you end up staying in the same place your whole life.</h1>
      </div>
    </section>
  )
}

export default Hero