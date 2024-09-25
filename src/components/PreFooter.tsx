import React from 'react'
import CallToAction from '@/components/CallToAction'

const PreFooter: React.FC = () => {
  return (
    <section className="relative">
      <div className="container mx-auto px-4">
        <img
          src="/images/faq-adornment.png"
          className="absolute top-[-32px] left-[-96px]"
        />
        <div className="flex justify-around">
          <div className="w-2/3 text-6xl text-white font-normal mb-12">
            Be a part of shaping the future of Ethereum in Southeast Asia.
          </div>
          <div className="w-1/3 flex align-bottom justify-end">
            <CallToAction />
          </div>
        </div>
        <div className="flex justify-between mt-32">
          <img src="/images/hero-logo.png" />
          <img src="/images/text.svg" />
        </div>
      </div>
    </section>
  )
}

export default PreFooter
