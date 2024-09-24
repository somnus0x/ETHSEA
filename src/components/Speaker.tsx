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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-4 shadow-md text-center">
            <img src="/speakers/aya.jpg" alt="Photo of Aya Miyaguchi" />
            <p>Aya Miyaguchi</p>
            <p>Executive Director, Ethereum Foundation</p>
          </div>
          <div className="bg-white p-4 shadow-md text-center">
            <img src="/speakers/vitalik.jpg" alt="Photo of Vitalik Buterin" />
            <p>Vitalik Buterin</p>
            <p>Co-founder, Ethereum</p>
          </div>
          <div className="bg-white p-4 shadow-md text-center">
            <img src="/speakers/placeholder.png" alt="Photo of Placeholder" />
            <p>More speakers to be announced</p>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Speakers
