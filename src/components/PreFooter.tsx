import React from 'react'
import CallToAction from '@/components/CallToAction'

const PreFooter: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4">Be a part of shaping the future of Ethereum in Southeast Asia.</h2>
        <CallToAction />
      </div>
    </section>
  )
}

export default PreFooter
