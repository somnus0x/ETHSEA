import React from 'react'
import CallToAction from './CallToAction'

const About: React.FC = () => {
  return (
    <section id="about" className="relative md:pb-28 pb-14">
      <img
        src="/images/about-adornment.png"
        className="absolute top-[-32px] left-[-96px] md:left-[-200px] opacity-15 md:opacity-100"
      />
      <div className=" container mx-auto md:px-4 px-8 ">
        <div className="">
          <div className="md:text-5xl text-3xl text-white font-normal mb-2">
            A one day conference designed to
          </div>
          <div className="text-[#F8D113] md:text-5xl text-3xl font-normal mb-2">
            {' '}
            Onboard Newcomers
          </div>
          <div className="text-[#2CC6BA] md:text-5xl text-3xl font-normal mb-2">
            {' '}
            Connect Leaders
          </div>
          <div className="text-primary md:text-5xl text-3xl font-normal mb-2">
            {' '}
            Showcase SEA Initiatives
          </div>
          <div className="md:text-5xl text-3xl text-white font-normal mb-2">
            within the Ethereum ecosystem
          </div>
        </div>
        <div className="flex md:flex-row flex-col  justify-around mt-11">
          <div className="w-full md:w-1/2 text-white md:text-3xl text-xl">
            Ethereum SEA Day brings together the best minds in the industry to share
            their insights, expertise, and experiences on all things Ethereum. Enjoy
            a full day of talks, workshops, and panels focused on the latest
            developments in Ethereum and blockchain technology.
          </div>
          <div className="w-full md:w-1/2 flex md:justify-end justify-center md:items-end md:items-center mt-10 md:mt-0">
            <CallToAction />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
