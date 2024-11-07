import React, { useState, useMemo } from 'react'

interface Schedule {
  header: string
  subheader: string
  schedule: ScheduleItem[]
}
interface ScheduleItem {
  time: string
  speaker: string
  description: string
}

const schedules = [
  {
    header: 'Talk 1',
    subheader: 'Spectrum of Ethereum',
    color: '[#FCE300]',
    schedule: [
      {
        time: '09:30',
        speaker: '',
        description: 'Doors open',
      },
      {
        time: '10:00 to 10:20',
        speaker: 'Unnawut',
        description: 'Web3 Landscape in SEA',
      },
      {
        time: '10:20 to 10:40',
        speaker: 'Mario Havel',
        description: 'ELI5: L1 protocol development',
      },
      {
        time: '10:40 to 11:00',
        speaker: 'Hubert, L2BEAT',
        description: 'ELI5: Layer 2',
      },
      {
        time: '11:00 to 11:20',
        speaker: 'Kim Trong Nguyen, Kyber',
        description: 'ELI5: DeFi',
      },
      {
        time: '11:20 to 11:40',
        speaker: 'Lysa JY Tan',
        description: 'ELI5 CryptoEconomics',
      },
      {
        time: '11:40 to 12:00',
        speaker: 'Aya Miyaguchi',
        description: 'Fireside chat with Aya',
      },
      {
        time: '12:00 to 13:00',
        speaker: '',
        description: 'Lunch time',
      },
      {
        time: '13:00 to 13:20',
        speaker: 'DEPA',
        description: 'The importance of blockchain for the Thailand ecosystem',
      },
      {
        time: '13:20 to 13:40',
        speaker: 'Jern PSE',
        description: 'ELI5 ProgCrpto',
      },
      {
        time: '13:40 to 14:00',
        speaker: 'Topology',
        description: 'Game/AW',
      },
      {
        time: '14:00 to 14:20',
        speaker: 'Guo',
        description: 'Decentralized social media',
      },
      {
        time: '14:20 to 14:40',
        speaker: 'Varit Curia',
        description: 'ELI5: DAO',
      },
      {
        time: '14:40 to 15:00',
        speaker: 'Cathie',
        description: 'ELI5: Crypto x AI',
      },
      {
        time: '15:00 to 15:20',
        speaker: '',
        description: 'Break',
      },
      {
        time: '15:20 to 15:40',
        speaker: 'Irene Umar',
        description:
          'Potential of future Indonesia creative economy landscape and it’s potential using Web3 technology',
      },
      {
        time: '15:40 to 16:00',
        speaker: 'Loi Luu',
        description:
          'Why ethereum is more relevant today than ever (and will be for a long time)',
      },
      {
        time: '16:00 to 16:40',
        speaker:
          "MynaWallet (Japan's gov ID), Anon-Aadhaar (India), and Proof of Passport)",
        description: 'National IDs in the Ethereum ecosystem',
      },
      {
        time: '16:40 to 17:00',
        speaker: 'Vitalik Buterin',
        description:
          'Southeast Asia and its importance to the global Ethereum ecosystem',
      },
    ],
  },
  {
    header: 'Talk 2',
    subheader: 'Action Room',
    color: '[#2CC6BA]',
    schedule: [
      {
        time: '09:30',
        speaker: '',
        description: 'Doors open',
      },
      {
        time: '10:00 to 10:20',
        speaker: 'TY',
        description: 'Exploring Ethereum and L2s with a block explorer',
      },
      {
        time: '10:20 to 10:40',
        speaker: 'Tin',
        description: 'Crypto UX and Bridging User Mental Models to Developers',
      },
      {
        time: '10:40 to 11:00',
        speaker: 'Sheng Yong Kim',
        description: 'Building Products in Web3 Data Space',
      },
      {
        time: '11:00 to 11:20',
        speaker: 'Billy & Wit',
        description: 'Building Web3 as a Student: Insights, Challenges, and Growth',
      },
      {
        time: '11:20 to 11:40',
        speaker: 'Marco Manoppo',
        description: 'Building blocks to succeed as web3 founders',
      },
      {
        time: '12:00 to 13:00',
        speaker: '',
        description: 'Lunch time',
      },
      {
        time: '13:00 to 13:20',
        speaker: 'Mike Phul',
        description: 'Journey as a Web3 Founder - From Founding to Exit',
      },
      {
        time: '13:20 to 13:40',
        speaker: 'Rati, Chun, Arin',
        description: 'Local Dev Panel',
      },
      {
        time: '13:40 to 14:00',
        speaker: 'Rati, Chun, Arin',
        description: 'Local Dev Panel',
      },
      {
        time: '14:00 to 14:20',
        speaker: 'Vectorized',
        description: 'Starting a dev journey into Ethereum',
      },
      {
        time: '14:20 to 14:40',
        speaker: 'Nutchanon Ploypray',
        description: '101 for data analyst',
      },
      {
        time: '14:40 to 15:00',
        speaker: 'Chee Chyuan',
        description: 'ZKP Research',
      },
      {
        time: '15:00 to 15:20',
        speaker: '',
        description: 'Break',
      },
      {
        time: '15:20 to 15:40',
        speaker: 'Muhammad Amirul Ashraf',
        description: 'Optimizing execution client sync time',
      },
      {
        time: '15:40 to 16:00',
        speaker: 'Harith Kamarul',
        description: 'Learnings on organising an Ethereum Community',
      },
    ],
  },
  {
    header: 'Workshop 1',
    subheader: '',
    color: 'primary',
    schedule: [
      {
        time: '13:00 to 16:00',
        speaker: '',
        description: 'Web3 Developer Onboarding Workshop',
      },
    ],
  },
  {
    header: 'Workshop 2',
    subheader: '',
    color: 'primary',
    schedule: [],
  },
]

const ScheduleSection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const schedule: Schedule = useMemo(() => {
    return schedules[selectedIndex]
  }, [selectedIndex, setSelectedIndex])
  return (
    <section id="faq" className="relative md:pb-32 pb-16">
      <div className=" mx-auto md:px-4 px-8">
        <img
          src="/images/about-adornment.png"
          className="absolute top-[-32px] left-[-96px] md:left-[-200px] opacity-15 md:opacity-100"
          alt=""
        />
        <div className="md:text-5xl text-3xl text-white font-normal mb-12">
          Schedule
        </div>
        <div className="flex md:flex-row flex-col justify-between">
          {schedules.map((s, index) => (
            <div
              key={index}
              className="flex md:flex-row flex-col md:items-center items-end md:mb-0 mb-2 justify-between cursor-pointer"
              style={
                index === selectedIndex
                  ? {
                      borderBottom: '4px solid transparent',
                      borderImage:
                        'linear-gradient(to right, #FBD91E 0%, #FF6A39 100%) 1',
                      borderImageSlice: 1,
                    }
                  : {}
              }
              onClick={() => setSelectedIndex(index)}
            >
              <div
                className={`text-${s.color}  font-semibold md:text-3xl text-2xl md:mr-8 mr-0 `}
              >
                {s.header}
              </div>
              <div className="text-white font-normal md:text-2xl text-sm">
                {s.subheader}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col mt-12">
          {schedule?.schedule.map((s, index) => (
            <div
              className="flex md:flex-row flex-col justify-between md:items-center items-start py-[24px] border-b-2 border-b-primary"
              key={index}
            >
              <div className="md:w-1/3 w-full text-white font-normal md:text-4xl text-2xl">
                {s.time}
              </div>
              <div className="md:w-2/3 w-full flex flex-col items-start">
                <div className="text-[#F8D113] md:text-md text-sm">{s.speaker}</div>
                <div className="text-white font-normal text-2xl">
                  {s.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ScheduleSection
