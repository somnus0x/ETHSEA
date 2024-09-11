import React from 'react'

const list = [
  'Keynote speeches on Ethereum and blockchain technology',
  'Interactive workshops and hands-on sessions on building Ethereum-based applications',
  'Exhibition area showcasing innovative Ethereum-based solutions',
  'Panel discussions on topics such as security, scalability, and adoption',
  'Networking opportunities with 500+ attendees',
  'Exclusive access to the Ethereum SEA Day community',
  'Unwind and enjoy the vibe!',
]

const WhatToExpect: React.FC = () => {
  return (
    <section id="about" className="bg-[#FFDA24] rounded-t-3xl pb-24">
      <div className="container mx-auto py-4">
        <div className="mt-14 flex justify-center items-center">
          <div className="flex text-[#2C40BA] text-5xl uppercase font-semibold">
            <img className="mr-12" src="/images/what-to-expected.svg" alt="ticket" />
            What to expect
            <img className="ml-12" src="/images/what-to-expected.svg" alt="ticket" />
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-start mt-16">
          {list.map((item, index) => (
            <div
              key={index}
              className="rounded-[30px] w-[594px] text-3xl bg-white p-8 mb-4 mx-2"
            >
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatToExpect
