import React from 'react'

const Speakers: React.FC = () => {
  return (
    <section id="speakers" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Speakers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Add speaker items here */}
          <div className="bg-white p-4 shadow-md">Speaker 1</div>
          <div className="bg-white p-4 shadow-md">Speaker 2</div>
          <div className="bg-white p-4 shadow-md">Speaker 3</div>
          <div className="bg-white p-4 shadow-md">Speaker 4</div>
        </div>
      </div>
    </section>
  )
}

export default Speakers
