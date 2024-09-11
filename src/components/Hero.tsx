import React from 'react'
import CallToAction from '@/components/CallToAction'

const Hero: React.FC = () => {
  return (
    <section className="text-center">
      <div className="mx-12">
        <img src="/images/hero.png" alt="hero" />
      </div>
      <div className="container mx-auto px-4">
        <h1 className="text-5xl text-white uppercase font-semibold mb-4">ethereum south east asia day</h1>
        <h1 className="text-3xl text-white uppercase font-semibold mb-4">11st Nov 2024</h1>
        <div className="text-white text-xl mb-8">Join us in shaping the future of ethereum in Southeast Asia</div>
        <CallToAction />
      </div>
    </section>
  )
}

export default Hero
