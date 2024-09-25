import React from 'react'
import CallToAction from '@/components/Button'

const Venue: React.FC = () => {
  return (
    <section id="venue" className="relative pb-28">
      <img
        src="/images/venue-adornment.png"
        className="absolute top-[-32px] left-[-96px]"
      />
      <div className="container mx-auto py-4">
        <div className="text-6xl text-white font-normal mb-12">The venue</div>
        <div className="flex justify-between">
          <div>
            <a className="text-6xl text-primary" href="https://www.qsncc.com">
              Queen Sirikit National <br /> Convention Center
            </a>
            <div className="mt-28">
              <div className="text-yellow text-3xl">Location</div>
            </div>
            <a
              href="https://maps.app.goo.gl/ScmRm11JqzBJJr7u6"
              className="text-white text-3xl mt-3"
            >
              60 Ratchadaphisek Rd, Khlong Toei, Bangkok 10110
            </a>
          </div>
          <img
            className=" rounded-lg"
            width="500"
            src="/images/qsncc.jpg"
            alt="Queen Sirikit National Convention Center"
          />
        </div>
      </div>
    </section>
  )
}

export default Venue
