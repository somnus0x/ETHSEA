import React, { useState } from 'react'

const highlights = [
  {
    id: 'talks',
    title: 'Talks',
    description: 'Keynote speeches on Ethereum and blockchain technology',
  },
  {
    id: 'workshops',
    title: 'Workshops',
    description:
      'Interactive workshops and hands-on sessions on building Ethereum-based applications',
  },
  {
    id: 'discussions',
    title: 'Discussions',
    description:
      'Panel discussions on topics such as security, scalability, and adoption',
  },
  {
    id: 'exhibits',
    title: 'Exhibits',
    description: 'Exhibition area showcasing innovative Ethereum-based solutions',
  },
]

const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">INTERSECTIONS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item) => (
            <div key={item.title} className="flex flex-col items-center">
              <div className="border border-gray-300 aspect-square w-full flex items-center justify-center mb-4">
                <span className="text-black font-semibold">{item.title}</span>
              </div>
              <div className="w-full border-gray-300">{item.description}</div>
              <div className="w-full  border-gray-300 mt-2">XXX</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Highlights
