import React from 'react'
import CallToAction from './CallToAction'

const About: React.FC = () => {
  return (
    <section id="about" className="relative pb-28">
      <img
        src="/images/about-adornment.png"
        className="absolute top-[-32px] left-[-96px]"
      />
      <div className="container mx-auto ">
        <div className="">
          <div className="text-5xl text-white font-normal mb-2">
            A one day conference designed to
          </div>
          <div className="text-[#F8D113] text-5xl font-normal mb-2">
            {' '}
            Onboard Newcomers
          </div>
          <div className="text-[#2CC6BA] text-5xl font-normal mb-2">
            {' '}
            Connect Leaders
          </div>
          <div className="text-primary text-5xl font-normal mb-2">
            {' '}
            Showcase SEA Initiatives
          </div>
          <div className="text-5xl text-white font-normal mb-2">
            within the Ethereum ecosystem
          </div>
        </div>
        <div className="flex  justify-around mt-11">
          <div className="w-1/2 text-white text-3xl">
            Ethereum SEA Day brings together the best minds in the industry to share
            their insights, expertise, and experiences on all things Ethereum. Enjoy
            a full day of talks, workshops, and panels focused on the latest
            developments in Ethereum and blockchain technology.
          </div>
          <div className="w-1/2 flex justify-end items-end">
            <CallToAction />
          </div>
        </div>
        {/* <div className="flex justify-center items-center">
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
      </div> */}
      </div>
    </section>
  )
}

export default About
