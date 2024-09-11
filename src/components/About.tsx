import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-center items-center">
          <div>
            <img width={123} height={144} src="/images/adornment.svg" alt="about" />
            <div className="text-5xl mt-6 text-white font-semibold border-b-4 border-[#2CC6BA]">
              Intro
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <div className="text-white text-3xl ">
            {' '}
            Ethereum SEA Day is a unique gathering designed to
          </div>
          <div className="text-[#F8D113] text-5xl font-semibold mt-8 mb-4">
            {' '}
            Onboard Newcomers
          </div>
          <div className="text-[#2CC6BA] text-5xl font-semibold mb-4">
            {' '}
            Connect Leaders
          </div>
          <div className="text-primary text-5xl font-semibold mb-4">
            {' '}
            Showcase SEA Initiatives
          </div>
          <div className="flex justify-center items-center">
            <div className="w-[979px] text-white text-3xl font-semibold mb-4">
              {' '}
              within the Ethereum ecosystem in Southeast Asia. <br />
              <br />
              Ethereum SEA Day brings together the best minds in the industry to
              share their insights, expertise, and experiences on all things
              Ethereum. Enjoy a full day of talks, workshops, and panels focused on
              the latest developments in Eths ereum and blockchain technology.
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <img src="/images/left.svg" alt="about" />
        <img src="/images/center.svg" alt="about" />
        <img src="/images/right.svg" alt="about" />
      </div>
    </section>
  )
}

export default About
