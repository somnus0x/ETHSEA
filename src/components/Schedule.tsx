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
        speaker: 'Unnawut Leepaisalsuwanna - Devcon Team',
        description:
          'Ethereum in Southeast Asia: The Past, The Presence, The Future',
      },
      {
        time: '10:20 to 10:40',
        speaker: 'Mario Havel - Protocol Support, Ethereum Foundation',
        description:
          'L1 Protocol Development: Its Goals, How It Works, Why It Works That Way & How to Get Involved',
      },
      {
        time: '10:40 to 11:00',
        speaker: 'Hubert Kotliński - L2BEAT',
        description: 'A Very Quick Overview of L2s',
      },
      {
        time: '11:00 to 11:20',
        speaker: 'Kim Trong Nguyen - Head of Research, Kyber Network',
        description: 'DeFi: Then and Now',
      },
      {
        time: '11:20 to 11:40',
        speaker: 'Lisa Tan - Founder & CEO, Economics Design',
        description: 'Cryptoeconomics',
      },
      {
        time: '11:40 to 12:00',
        speaker: 'Aya Miyaguchi - Executive Director, Ethereum Foundation',
        description: 'Fireside Chat with Aya',
      },
      {
        time: '12:00 to 13:00',
        speaker: '',
        description: 'Lunch time',
      },
      {
        time: '13:00 to 13:20',
        speaker:
          'Dr. Chinawut Chinaprayoon - Executive Vice President of the Digital Economy Promotion Agency',
        description: 'The Importance of Blockchain for the Thailand Ecosystem',
      },
      {
        time: '13:20 to 13:40',
        speaker:
          'Teeramet (Jern) Kunpittaya - Research Engineer at Privacy & Scaling Exploration, Ethereum Foundation',
        description: 'ELI5 Programmable Crptography',
      },
      {
        time: '13:40 to 14:00',
        speaker: 'Hilmar Petursson & Justin Gilbert',
        description:
          'EVE Frontier - challenges, lessons and future of building an autonomous world on Ethereum',
      },
      {
        time: '14:00 to 14:20',
        speaker: 'Guo Liu - Matters Lab',
        description: 'The Online Content We Consume and How to Decetralize Them',
      },
      {
        time: '14:20 to 14:40',
        speaker: 'Varit Curia - CEO & Co-Founder, Curia Lab',
        description: 'DAO Landscape & Opportunities in 2025',
      },
      {
        time: '14:40 to 15:00',
        speaker: 'Cathie So - Chief Scientist, ORA',
        description: 'Crypto x AI',
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
        speaker: 'Loi Luu - Founder of Caliber & Kyber',
        description:
          'Why Ethereum is More Relevant Today Than Ever (and Will Be For a Long Time)',
      },
      {
        time: '16:00 to 16:40',
        speaker:
          'Yanis (Anon Aadhaar), Hiroyuki Tachibana (Co-founder CEO  / MynaWallet), Michael Elliot (ZKpassport), Florent Tavernier (OpenPassport), nico (Kyoto University, OpenPassport)',
        description: 'National IDs in the Ethereum Ecosystem',
      },
      {
        time: '16:40 to 17:00',
        speaker: 'Vitalik Buterin - Co-founder, Ethereum',
        description:
          'Southeast Asia and Its Importance to the Global Ethereum Ecosystem',
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
        speaker: 'TY - Etherscan',
        description: 'Exploring Ethereum and L2s with a Block Explorer',
      },
      {
        time: '10:20 to 10:40',
        speaker:
          'Christine (0xDanki) Erispe - Opensource Developer of The WAIFU Project',
        description: 'Crypto UX and Bridging User Mental Models to Developers',
      },
      {
        time: '10:40 to 11:00',
        speaker: 'Sheng Yong Kim - CoinGecko',
        description: 'Building Products in Web3 Data Space',
      },
      {
        time: '11:00 to 11:20',
        speaker:
          'Jarukit (Wit) Jintanasathirakul & Ratchanon (Billy) Tarawan - Catalyzt Tech',
        description: 'Building Web3 as a Student: Insights, Challenges, and Growth',
      },
      {
        time: '11:20 to 11:40',
        speaker: 'Marco Manoppo - Primitive Ventures',
        description: 'Building Blocks to Succeed as Web3 Founders',
      },
      {
        time: '12:00 to 13:00',
        speaker: '',
        description: 'Lunch time',
      },
      {
        time: '13:00 to 13:20',
        speaker: 'Mike Phulsuksombati - Founder & Staff Software Engineer',
        description: 'Journey as a Web3 Founder - From Founding to Exit',
      },
      {
        time: '13:20 to 14:00',
        speaker: 'Rati Montreewat, Chun Rapeepat, Arin Trongsantipong',
        description:
          'Tales of 3 Developers: The Independent Developer, The Indie Hacker, and The Product Developer',
      },
      {
        time: '14:00 to 14:20',
        speaker: 'Vectorized - Solady Maintainer',
        description: 'Starting a Dev Journey into Ethereum',
      },
      {
        time: '14:20 to 14:40',
        speaker: 'Nutchanon Ploypray - Tech Lead at Cleverse',
        description: '101 for Data Analyst',
      },
      {
        time: '14:40 to 15:00',
        speaker: 'Chee Chyuan - Researcher at Nethermind',
        description: 'ZKP Research',
      },
      {
        time: '15:00 to 15:20',
        speaker: '',
        description: 'Break',
      },
      {
        time: '15:20 to 15:40',
        speaker: 'Muhammad Amirul Ashraf - Ethereum Core Dev at Nethermind',
        description: 'Optimizing Execution Client Sync Time',
      },
      {
        time: '15:40 to 16:00',
        speaker: 'Harith Kamarul - Team Mascot, ETHKL',
        description: 'Learnings on Organising an Ethereum Community',
      },
      {
        time: '16:00 to 16:20',
        speaker:
          'Setiaji Setiaji - Chief of Digital Transformation Office at Ministry of Health of the Republic of Indonesia',
        description:
          'How SatuSehat App, the Official Healthcare App in Indonesia, is Experimenting Blockchain for Future Patient Data',
      },
      {
        time: '16:20 to 16:40',
        speaker: 'Gesa Schneider - Ethereum Scholar',
        description:
          'Leveraging Ethereum for Sustainable Solutions in Southeast Asia',
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
        speaker: 'Nattapon (Tot) Nimakul & Sitthavee (Son) Teerakulchon',
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
