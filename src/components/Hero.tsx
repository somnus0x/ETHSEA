import React from 'react'
import Button from '@/components/Button'

const Hero: React.FC = () => {
  return (
    <section className="">
      <div className="container mx-auto  py-4">
        <div className="flex justify-between px-14">
          <img src="/images/text.svg" />
          <img src="/images/hero-logo.png" />
        </div>
        <div className="flex justify-between items-center pt-40 pb-28">
          <div className="font-medium text-xl text-white">November 11st, 2024</div>
          <div className="font-medium text-xl text-white">
            Queen Sirikit National Convention Center
          </div>
          <div className="font-medium text-xl text-white">Bangkok, Thailand</div>
          <Button link="">GET YOUR TICKETS</Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
