import React from 'react'
import CallToAction from '@/components/CallToAction'

const PreFooter: React.FC = () => {
  return (
    <section className="relative">
      <div className=" mx-auto md:px-4 px-8">
        <img
          src="/images/faq-adornment.png"
          className="absolute top-[-32px] left-[-96px] md:left-[-200px] opacity-15 md:opacity-100"
        />
        <div className="flex flex-col md:flex-row justify-around">
          <div className="w-2/3 md:text-5xl text-3xl text-white font-normal mb-12">
            Be a part of shaping the future of Ethereum in Southeast Asia.
          </div>
          <div className="w-1/3 flex align-bottom md:justify-end justify-center">
            <CallToAction />
          </div>
        </div>
        <div className="flex justify-between md:mt-32 mt-16">
          {/* <img className="w-1/3" src="/images/hero-logo.png" />
          <img className="w-2/3" src="/images/text.svg" /> */}
        </div>
      </div>
    </section>
  )
}

export default PreFooter
