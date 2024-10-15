import React, { useState } from 'react'

// Refer to https://tailwindcss.com/docs/customizing-colors for the color palette

const speakers = [
  {
    name: 'Vitalik Buterin',
    menuName: 'Vitalik Buterin',
    title: 'Co-founder, Ethereum',
    social: 'VitalikButerin',
    image: '/speakers/vitalik.jpg',
    color: 'text-[#fecaca]',
    underlineColor: 'border-[#fecaca]',
    description:
      "Vitalik Buterin is the co-founder of Ethereum, a decentralized platform that runs smart contracts. \
      Vitalik has been instrumental in developing Ethereum's technology and vision, contributing significantly to the fields of cryptocurrency and blockchain. \
      His work continues to shape the future of decentralized technologies and their applications.",
  },
  // {
  //   name: 'Aya Miyaguchi',
  //   menuName: 'Aya Miyaguchi',
  //   title: 'Executive Director, Ethereum Foundation',
  //   social: 'AyaMiyagotchi',
  //   image: '/speakers/aya.jpg',
  //   color: 'text-[#fed7aa]',
  //   underlineColor: 'border-[#fed7aa]',
  //   description:
  //     "Aya Miyaguchi is the Executive Director of the Ethereum Foundation, a non-profit organization dedicated to supporting the Ethereum ecosystem. \
  //     With her leadership, she has been instrumental in driving the growth and development of Ethereum globally. \
  //     Aya's work focuses on fostering education, research, and community initiatives that contribute to the advancement of decentralized technologies and their positive impact on society.",
  // },
  {
    name: 'Sheng Yong Kim',
    menuName: 'Sheng Yong Kim',
    title: 'Product Manager, CoinGecko',
    social: null,
    image: '/speakers/sykim.jpeg',
    color: 'text-[#fde68a]',
    underlineColor: 'border-[#fde68a]',
    description:
      "Sheng Yong Kim is a Product Manager at CoinGecko, one of the world's largest cryptocurrency data aggregators. \
      With his expertise in the crypto market and product development, Sheng Yong plays a crucial role in enhancing CoinGecko's offerings and user experience.",
  },
  {
    name: 'TY',
    menuName: 'TY',
    title: 'Content Writer, Etherscan',
    social: null,
    image: '/speakers/ty.jpeg',
    color: 'text-[#d9f99d]',
    underlineColor: 'border-[#d9f99d]',
    description:
      'TY is a Content Writer at Etherscan, the leading blockchain explorer and analytics platform for Ethereum. \
      With his expertise in blockchain technology and content creation, TY plays a crucial role in making complex blockchain concepts accessible to a wider audience. \
      His work contributes to enhancing user understanding and engagement with Ethereum and its ecosystem.',
  },
  {
    name: 'Varit Ruangsiri',
    menuName: 'Varit Ruangsiri',
    title: 'Chief Executive Officer & Co-Founder, Curia Lab',
    social: 'v3eth',
    image: '/speakers/varit.png',
    color: 'text-[#bbf7d0]',
    underlineColor: 'border-[#bbf7d0]',
    description:
      'Varit Ruangsiri, CEO & Co-founder of Curia Lab, has contributed to decentralized governance in DAOs such as Optimism Collective, SafeDAO, and ArbitrumDAO, \
      focusing on strategic project evaluation and data-driven governance. At Curia Lab, he supports the development of specialized tools and insights to improve \
      transparency and innovation in DAO governance.',
  },
  {
    name: 'Nattapon (Tot) Nimakul',
    menuName: 'Tot Nattapon',
    title: '',
    social: null,
    image: '/speakers/tot.jpg',
    color: 'text-[#a5f3fc]',
    underlineColor: 'border-[#a5f3fc]',
    description:
      'Nattapon (Tot) Nimakul is a prominent figure in the Thai blockchain and cryptocurrency community.',
  },
  {
    name: 'Teeramet (Jern) Kunpittaya',
    menuName: 'Jern Kunpittaya',
    title: 'R&D Engineer, Privacy & Scaling Explorations (PSE), Ethereum Foundation',
    social: 'jernkun',
    image: '/speakers/jern.jpeg',
    color: 'text-[#ddd6fe]',
    underlineColor: 'border-[#ddd6fe]',
    description:
      "Teeramet is an R&D Engineer at Privacy & Scaling Explorations (PSE), a research team within the Ethereum Foundation. \
      His work focuses on advancing privacy and scaling solutions for Ethereum. Jern contributes to cutting-edge research and development \
      in areas such as zero-knowledge proofs and other technologies that aim to enhance Ethereum's capabilities and user experience.",
  },
  // {
  //   name: '',
  //   menuName: '',
  //   title: '',
  //   social: null,
  //   image: '/speakers/',
  //   color: 'text-yellow',
  //   description: '',
  // },
]
const Speakers: React.FC = () => {
  const [speakerIndex, setSpeakerIndex] = useState(0)
  return (
    <section id="speakers" className="relative pb-28">
      <div className=" mx-auto md:px-4 px-8">
        <img
          src="/images/speaker-adornment.png"
          className="absolute top-[-32px] left-[-96px] md:left-[-200px] opacity-15 md:opacity-100"
          alt=""
        />
        <div className="md:text-5xl text-3xl text-white font-normal mb-12">
          Speakers
        </div>
        {/* <div className="p-4 text-center text-white text-2xl">
          <p>Speakers to be announced soon!</p>
        </div> */}
        <div className="mt-12 flex justify-between">
          {/* 
            Speaker card
          */}
          <div className="w-2/3">
            <img
              src={speakers[speakerIndex].image}
              className="rounded-3xl w-[125px] md:w-[250px] md:h-[250px] h-[125px]"
              alt={`Photo of ${speakers[speakerIndex].name}`}
            />
            <div className="mt-8 font-light md:text-2xl text-xl md:leading-relaxed">
              <span className="text-yellow">{speakers[speakerIndex].title}</span>{' '}
              <span className="text-white">
                {speakers[speakerIndex].description}
              </span>
            </div>
            {speakers[speakerIndex].social && (
              <div className="mt-4">
                <a
                  className="flex items-center"
                  href={`https://twitter.com/${speakers[speakerIndex].social}`}
                >
                  <img src="/images/twitter.svg" alt="Twitter" />
                  <div className="font-semibold text-white text-2xl">
                    {speakers[speakerIndex].social}
                  </div>
                </a>
              </div>
            )}
          </div>
          {/* 
            Speakers list
          */}
          <div className="w-1/3 flex flex-col justify-start items-end">
            {speakers.map((speaker, index) => (
              <div
                onClick={() => setSpeakerIndex(index)}
                key={index}
                className="flex items-center cursor-pointer"
              >
                <div
                  className={`font-light ${
                    speaker.color
                  } md:text-3xl text-xl mr-8 mb-2 border-b-2 ${`border-${speaker.color}`} ${
                    index != speakerIndex ? 'mr-[31px] md:mr-[75px]' : 'mr-8'
                  }`}
                >
                  {speaker.menuName}
                </div>
                {index === speakerIndex && (
                  <img src="/images/speaker-diamond.svg" alt="" />
                )}
              </div>
            ))}
            <div className="flex items-center">
              <div
                className={`font-light text-white md:text-3xl text-xl mr-[43px] md:mr-[75px]`}
              >
                More Incoming ...
              </div>
            </div>
          </div>
        </div>
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
