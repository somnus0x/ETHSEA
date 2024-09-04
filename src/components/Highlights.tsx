import React, { useState } from 'react'
const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">INTERSECTIONS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex flex-col items-center">
              <div className="border border-gray-300 aspect-square w-full flex items-center justify-center mb-4">
                <span className="text-black font-semibold">HIGHLIGHT {item}</span>
              </div>
              <div className="w-full border-gray-300">XXX</div>
              <div className="w-full  border-gray-300 mt-2">XXX</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Highlights
