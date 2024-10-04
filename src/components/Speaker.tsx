import React, { useState } from 'react'

const speakers = [
  {
    name: 'Vitalik Buterin',
    title: 'Co-founder, Ethereum',
    social: '@VitalikButerin',
    image: '/speakers/vitalik.jpg',
    color: 'text-background-secondary',
    description:
      ' a revolutionary blockchain platform that introduced smart contracts and decentralized applications (dApps). His work has transformed blockchain technology, driving innovations like decentralized finance (DeFi) and NFTs, and empowering developers to build open, secure solutions for the future of the internet.',
  },
  {
    name: 'Aya Miyaguchi',
    title: 'Executive Director, Ethereum Foundation',
    social: '@VitalikButerin',
    image: '/speakers/aya.jpg',
    color: 'text-yellow',
    description:
      ' a revolutionary blockchain platform that introduced smart contracts and decentralized applications (dApps). His work has transformed blockchain technology, driving innovations like decentralized finance (DeFi) and NFTs, and empowering developers to build open, secure solutions for the future of the internet.',
  },
]
const Speakers: React.FC = () => {
  const [speakerIndex, setSpeakerIndex] = useState(0)
  return (
    <section id="speakers" className="relative pb-28">
      <div className=" mx-auto md:px-4 px-8">
        <img
          src="/images/speaker-adornment.png"
          className="absolute top-[-32px] left-[-96px] md:left-[-200px] opacity-15 md:opacity-100"
        />
        <div className="md:text-5xl text-3xl text-white font-normal mb-12">
          Speakers
        </div>
        <div className="p-4 text-center text-white text-2xl">
          <p>Speakers to be announced soon!</p>
        </div>
        {/* <div className="mt-12 flex justify-between">
          <div className="w-2/3">
            <img
              src={speakers[speakerIndex].image}
              className="rounded-3xl w-[125px] md:w-[250px] md:h-[250px] h-[125px]"
              alt="Photo of Vitalik Buterin"
            />
            <div className="mt-8 font-semibold md:text-2xl text-xl">
              <span className="text-yellow">{speakers[speakerIndex].title}</span>{' '}
              <span className="text-white">
                {speakers[speakerIndex].description}
              </span>
            </div>
            <div className="mt-8 flex items-center">
              <img src="/images/twitter.svg" />
              <div className="font-semibold text-white text-2xl">
                {speakers[speakerIndex].social}
              </div>
            </div>
          </div>
          <div className="w-1/3 flex flex-col justify-start items-end">
            {speakers.map((speaker, index) => (
              <div
                onClick={() => setSpeakerIndex(index)}
                key={index}
                className="flex items-center cursor-pointer"
              >
                <div
                  className={`font-medium ${
                    speaker.color
                  } underline md:text-3xl text-xl mr-8 ${
                    index != speakerIndex ? 'mr-[31px] md:mr-[75px]' : 'mr-8'
                  }`}
                >
                  {speaker.name}
                </div>
                {index === speakerIndex && <img src="/images/speaker-diamond.svg" />}
              </div>
            ))}
            <div className="flex items-center cursor-pointer">
              <div
                className={`font-medium text-white underline md:text-3xl text-xl mr-[43px] md:mr-[75px]`}
              >
                More Incoming ..
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="flex text-[#fff] text-5xl uppercase font-semibold">
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
        </div> */}
      </div>
    </section>
  )
}

export default Speakers
