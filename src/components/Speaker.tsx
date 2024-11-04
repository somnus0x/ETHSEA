import React, { useState, useEffect, useMemo } from 'react'

// Refer to https://tailwindcss.com/docs/customizing-colors for the color palette
interface Speaker {
  name: string
  menuName: string
  title: string
  description: string
  social: string | null
  image: string
  color: string
  underlineColor: string
}

const speakers = [
  {
    name: 'Vitalik Buterin',
    menuName: 'Vitalik Buterin',
    title: 'Co-founder, Ethereum',
    description:
      "Vitalik Buterin is the co-founder of Ethereum, a decentralized platform that runs smart contracts. \
      Vitalik has been instrumental in developing Ethereum's technology and vision, contributing significantly to the fields of cryptocurrency and blockchain. \
      His work continues to shape the future of decentralized technologies and their applications.",
    social: 'VitalikButerin',
    image: '/speakers/vitalik.jpg',
    color: 'text-[#fecaca]',
    underlineColor: 'border-[#fecaca]',
  },
  // {
  //   name: 'Aya Miyaguchi',
  //   menuName: 'Aya Miyaguchi',
  //   title: 'Executive Director, Ethereum Foundation',
  //   description:
  //     "Aya Miyaguchi is the Executive Director of the Ethereum Foundation, a non-profit organization dedicated to supporting the Ethereum ecosystem. \
  //     With her leadership, she has been instrumental in driving the growth and development of Ethereum globally. \
  //     Aya's work focuses on fostering education, research, and community initiatives that contribute to the advancement of decentralized technologies and their positive impact on society.",
  //   social: 'AyaMiyagotchi',
  //   image: '/speakers/aya.jpg',
  //   color: 'text-[#fed7aa]',
  //   underlineColor: 'border-[#fed7aa]',
  // },
  {
    name: 'Sheng Yong Kim',
    menuName: 'Sheng Yong Kim',
    title: 'Product Manager, CoinGecko',
    description:
      "Sheng Yong Kim is a Product Manager at CoinGecko, one of the world's largest cryptocurrency data aggregators.",
    social: null,
    image: '/speakers/sykim.jpeg',
    color: 'text-[#fde68a]',
    underlineColor: 'border-[#fde68a]',
  },
  {
    name: 'TY',
    menuName: 'TY',
    title: 'Content Writer, Etherscan',
    description:
      'TY is a Content Writer at Etherscan, a block explorer and analytics platform for the Ethereum blockchain. \
      With his passion for Ethereum and content creation, TY makes blockchain concepts more accessible to a wider audience, \
      enhancing user understanding and engagement with the Ethereum ecosystem.',
    social: null,
    image: '/speakers/ty.jpeg',
    color: 'text-[#d9f99d]',
    underlineColor: 'border-[#d9f99d]',
  },
  {
    name: 'Varit Ruangsiri',
    menuName: 'Varit Ruangsiri',
    title: 'Chief Executive Officer & Co-Founder, Curia Lab',
    description:
      'Varit Ruangsiri, CEO & Co-founder of Curia Lab, has contributed to decentralized governance in DAOs such as Optimism Collective, SafeDAO, and ArbitrumDAO, \
      focusing on strategic project evaluation and data-driven governance. At Curia Lab, he supports the development of specialized tools and insights to improve \
      transparency and innovation in DAO governance.',
    social: 'v3eth',
    image: '/speakers/varit.png',
    color: 'text-[#bbf7d0]',
    underlineColor: 'border-[#bbf7d0]',
  },
  {
    name: 'Nattapon (Tot) Nimakul',
    menuName: 'Tot Nattapon',
    title: 'Senior Blockchain Product Strategist, KBTG',
    description:
      'Nattapon (Tot) Nimakul is a prominent figure in the Thai blockchain and cryptocurrency community.',
    social: null,
    image: '/speakers/tot.webp',
    color: 'text-[#a5f3fc]',
    underlineColor: 'border-[#a5f3fc]',
  },
  {
    name: 'Sitthavee (Son) Teerakulchon',
    menuName: 'Son Sitthavee',
    title: 'Developer Expert, Chainlink',
    description: 'A man who enjoys coding and cryptography.',
    social: 'sitthaveet',
    image: '/speakers/sun.jpeg',
    color: 'text-[#fbcfe8]',
    underlineColor: 'border-[#fbcfe8]',
  },
  {
    name: 'Teeramet (Jern) Kunpittaya',
    menuName: 'Jern Kunpittaya',
    title: 'R&D Engineer, Privacy & Scaling Explorations (PSE), Ethereum Foundation',
    description:
      "Jern's interests span programmable cryptography inluding zero knowledge, zkRegex, and lately on developing framework \
      to enable people to build on multi-party computation more systematically via privacy-preserving statistics.",
    social: 'jernkun',
    image: '/speakers/jern.jpeg',
    color: 'text-[#ddd6fe]',
    underlineColor: 'border-[#ddd6fe]',
  },
  {
    name: 'Harith Kamarul',
    menuName: 'Harith Kamarul',
    title: 'Team Mascot, ETHKL',
    social: 'harithk17',
    description:
      'Harith has been organising ETHKL, a volunteer-driven community focused on Ethereum and related technologies, since 2018. In his day job, he manages product at Etherscan.',
    image: '/speakers/harith.png',
    color: 'text-[#fecaca]',
    underlineColor: 'border-[#fecaca]',
  },
  {
    name: 'Hubert Kotliński',
    menuName: 'Hubert Kotliński',
    title: 'Business Development (BD), L2BEAT',
    social: 'hubkotl',
    description:
      'Hubert Kotliński is the author of the first engineering thesis on L2s in Poland, focused on holding rollups accountable with L2BEAT and promoting Ethereum values and possibilities across Eastern Europe.',
    image: '/speakers/hubert.jpg',
    color: 'text-[#fed7aa]',
    underlineColor: 'border-[#fed7aa]',
  },
  {
    name: 'Arin Trongsantipong',
    menuName: 'Arin Trongsantipong',
    title: 'Head of Product, Alpha Innovations Lab',
    social: '',
    description:
      'Arin has been building web3 products since DeFi Summer 2020, focusing on creating user-centric products. With a passion for combining intuitive design and technology, he strives to improve the web3 experience for all users.',
    image: '/speakers/arin.jpeg',
    color: 'text-[#fde68a]',
    underlineColor: 'border-[#fde68a]',
  },
  {
    name: 'Rati Montreewat',
    menuName: 'Rati Montreewat',
    title: 'Web3 Indie Maker building redprint.ninja',
    social: 'RATi_MOn',
    description:
      'Rati has been contributing to Ethereum & l2 ecosystem, including Optimism and Starknet, touching on technical development and dev-focused educational content. His interest is open-source and decentralized technology.',
    image: '/speakers/rati.jpeg',
    color: 'text-[#d9f99d]',
    underlineColor: 'border-[#d9f99d]',
  },
  {
    name: 'Chun Rapeepat',
    menuName: 'Chun Rapeepat',
    title: 'Indie Hacker',
    social: 'chunrapeepat',
    description:
      'Indie hacker, creator of learnalgorithm.com and Uniswap Calculator (acquired, now poolfish.xyz).',
    image: '/speakers/chun.jpeg',
    color: 'text-[#bbf7d0]',
    underlineColor: 'border-[#bbf7d0]',
  },
  {
    name: 'Che',
    menuName: 'Che',
    title: 'Software Developer, Nethermind',
    social: '',
    description: '',
    image: '/speakers/che.jpeg',
    color: 'text-[#a5f3fc]',
    underlineColor: 'border-[#a5f3fc]',
  },
  {
    name: 'Lisa Tan',
    menuName: 'Lisa Tan',
    title: 'Founder & CEO, Economics Design',
    social: '',
    description:
      'Lisa JY Tan is the founder of Economics Design and a leading economist, educator, and keynote speaker in Web3 and DeFi. She has presented at top events like ETHDenver and Token2049, lectured at universities in the U.S., U.K., and Switzerland, and advised global regulators on blockchain economics. Her best-selling book, Economics and Math of Token Engineering and DeFi, is widely used as a university textbook',
    image: '/speakers/lisa.jpeg',
    color: 'text-[#fbcfe8]',
    underlineColor: 'border-[#fbcfe8]',
  },
  {
    name: 'Cathie So',
    menuName: 'Cathie So',
    title: 'Chief Scientist, ORA',
    social: '',
    description:
      'Dr. Cathie So dove into Web3 as the founding tutor of Zero-Knowledge University, onboarding numerous developers into ZK. With a background as a researcher at the Ethereum Foundation and a wealth of experience speaking at various conferences on zkML, she now serves as the Chief Scientist at ORA.',
    image: '/speakers/cathie.PNG',
    color: 'text-[#ddd6fe]',
    underlineColor: 'border-[#ddd6fe]',
  },
]
const Speakers: React.FC = () => {
  const [speakerIndex, setSpeakerIndex] = useState(0)
  const speaker: Speaker = useMemo(() => {
    return speakers[speakerIndex]
  }, [speakerIndex, setSpeakerIndex])

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
              src={speaker.image}
              className="rounded-3xl w-[125px] md:w-[250px] md:h-[250px] h-[125px]"
              alt={`Photo of ${speaker.name}`}
            />
            <div className="mt-8 font-light md:text-2xl text-xl md:leading-relaxed">
              <span className="text-yellow">{speaker.title}</span>{' '}
              <span className="text-white">{speaker.description}</span>
            </div>
            {speaker.social && (
              <div className="mt-4">
                <a
                  className="flex items-center"
                  href={`https://twitter.com/${speaker.social}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/twitter.svg" alt="Twitter" />
                  <div className="font-semibold text-white text-2xl">
                    {speaker.social}
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
