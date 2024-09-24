import React from 'react'

const Speakers: React.FC = () => {
  return (
    <section id="speakers" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex text-[#fff] text-5xl uppercase font-semibold">
          <img className="mr-12" src="/images/what-to-expected.svg" alt="ticket" />
          Speakers
          <img className="mr-12" src="/images/what-to-expected.svg" alt="ticket" />
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> */}
          {/* Add speaker items here */}
          {/* <div className="bg-white p-4 shadow-md">Speaker 1</div> */}
          {/* <div className="bg-white p-4 shadow-md">Speaker 2</div> */}
          {/* <div className="bg-white p-4 shadow-md">Speaker 3</div> */}
          {/* <div className="bg-white p-4 shadow-md">Speaker 4</div> */}
        {/* </div> */}
        Speaker announcements soon!
      </div>
    </section>
  )
}

export default Speakers
