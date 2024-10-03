import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

const Venue: React.FC = () => {
  return (
    <ScrollableAnchor id="venue">
      <section className="relative md:pb-28 pb-14">
        <img
          src="/images/venue-adornment.png"
          className="absolute top-[-32px] left-[-96px] md:left-[-200px] opacity-15 md:opacity-100"
        />
        <div className=" mx-auto md:px-4 px-8 py-4">
          <div className="md:text-5xl text-3xl text-white font-normal mb-12">
            The venue
          </div>
          <div className="flex flex-col-reverse md:flex-row  justify-between items-center text-center md:text-left">
            <div>
              <a
                className="md:text-6xl text-3xl md:leading-tight md:mt-0 mt-12 text-primary"
                href="https://www.qsncc.com"
              >
                Queen Sirikit National <br /> Convention Center
              </a>
              <div className="md:mt-18 mt-8">
                <div className="text-yellow md:text-3xl text-xl">Location</div>
              </div>
              <a
                href="https://maps.app.goo.gl/ScmRm11JqzBJJr7u6"
                className="text-white md:text-3xl text-xl mt-3"
              >
                60 Ratchadaphisek Rd, Khlong Toei, Bangkok 10110
              </a>
            </div>
            <img
              className=" rounded-lg md:max-w-3xl w-full mb-12 md:mb-0"
              src="/images/qsncc.jpg"
              alt="Queen Sirikit National Convention Center"
            />
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  )
}

export default Venue
