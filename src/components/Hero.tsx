import React from 'react'
import Button from '@/components/Button'

const Hero: React.FC = () => {
  return (
    <section>
      <div className="container md:px-4 px-8 mx-auto md:py-4">
        <div className="flex justify-between md:px-14">
          <img className="w-2/3" src="/images/text.svg" />
          <img className="w-1/3" src="/images/hero-logo.png" />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 pb-14 md:pt-40 md:pb-14">
          <div className="flex flex-col md:flex-row text-center md:text-left">
            <div className="font-medium md:mr-0 mr-2  text-2xl md:text-xl mt-2 md:mt-0 text-white">
              November 11st, 2024
            </div>
            <div className="font-medium md:mr-0 mr-2  text-2xl md:text-xl mt-2 md:mt-0 text-white">
              Queen Sirikit National Convention Center
            </div>
            <div className="font-medium md:mr-0 mr-2 text-2xl md:text-xl mt-2 md:mt-0 text-white">
              Bangkok, Thailand
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <Button link="https://tickets.ethsea.org/">GET YOUR TICKETS</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
