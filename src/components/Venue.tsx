import React from 'react'
import CallToAction from '@/components/CallToAction'

const Venue: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-[#fff] font-semibold mb-4">
          Venue
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img className="w-full rounded-lg" src="/images/qsncc.jpg" alt="Queen Sirikit National Convention Center" />
          </div>
          <div className="md:w-1/2 md:pl-8 text-left">
            <p className="text-xl mb-2">
              <a href="https://www.qsncc.com">Queen Sirikit National Convention Center</a>
            </p>
            <p className="mb-2">60 Ratchadaphisek Rd, Khlong Toei, Bangkok 10110</p>
            <a href="https://maps.app.goo.gl/ScmRm11JqzBJJr7u6">View on Google Maps</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Venue
