import React from 'react'
import CallToAction from '@/components/CallToAction'

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">Join the Ethereum Movement in SEA</h1>
        <h2 className="text-3xl font-semibold mb-4">Connect with innovators. Learn from experts. <br/> Shape the future of Ethereum in Southeast Asia.</h2>
        <h3 className="text-2xl mb-8">11 November 2024, 9AM - 5PM</h3>
        <h3 className="text-2xl mb-8">Queen Sirikit National Convention Center</h3>
        <CallToAction />
      </div>
    </section>
  )
}

export default Hero
