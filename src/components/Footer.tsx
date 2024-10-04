import React from 'react'

const organizers = [
  {
    id: 'ethpadthai',
    name: 'EthPadThai',
    url: 'https://ethpadthai.org',
    img: '/organizers/ethpadthai.jpeg',
  },
  {
    id: 'ethereumsingapore',
    name: 'EthereumSingapore',
    url: 'https://www.ethereumsingapore.com',
    img: '/organizers/ethsg.png',
  },
  {
    id: 'ethkl',
    name: 'ETHKL',
    url: 'https://www.ethkl.org/',
    img: '/organizers/ETHKL.png',
  },
  {
    id: 'eth63',
    name: 'ETH63',
    url: 'https://www.facebook.com/eth63.ph',
    img: '/organizers/ETH63.png',
  },
]
const coorganizers = [
  {
    id: 'web3saigon',
    name: 'Web3 Saigon',
    url: 'https://x.com/Web3Saigon',
    img: '/organizers/web3saigon.png',
  },
  {
    id: 'ethereumindonesia',
    name: 'Ethereum Indonesia',
    url: 'https://x.com/eth_indo',
    img: '/organizers/ethindonesia.jpeg',
  },
  {
    id: 'web3together',
    name: 'Web3 Together',
    url: 'https://www.facebook.com/Web3Together/',
    img: '/organizers/web3together.png',
  },
  {
    id: 'pagoda',
    name: 'Pagoda',
    url: 'https://pagoda.wtf',
    img: '/organizers/pagoda.png',
  },
]

const supporters = [
  // Non-profit / communities
  {
    id: 'devcon',
    name: 'Devcon',
    url: 'https://devcon.org',
    img: '/supporters/devcon.png',
  },
  {
    id: 'cubs',
    name: 'Chulalongkorn University Blockchain Society',
    url: 'https://www.instagram.com/cubs.chula',
    img: '/supporters/cubs.png',
  },
  {
    id: 'thbuidl',
    name: 'THBUIDL',
    url: 'https://x.com/THBUIDL',
    img: '/supporters/thbuidl.png',
  },
  // Companies
  {
    id: 'cleverse',
    name: 'Cleverse',
    url: 'https://cleverse.com',
    img: '/supporters/cleverse.png',
  },
  {
    id: 'smallworld',
    name: "Smallworld",
    url: 'https://smallworldventure.com/',
    img: '/supporters/smallworld.png',
  },
]

const Footer: React.FC = () => {
  return (
    <footer id="supporters">
      <div className=" mx-auto md:px-4 px-8 md:py-32 py-16">
        <div className="rounded-[30px] bg-white p-12 md:mb-32 mb-16">
          <div className="text-background font-normal md:text-5xl text-3xl mb-14">
            Presented by:
          </div>
          <div className="flex mb-8 justify-between items-center">
            {organizers.map((organizer, index) => (
              <div className="inline-block w-64 text-center" key={index}>
                <a target="_blank" href={organizer.url}>
                  <img className="max-h-32 inline-block" src={organizer.img} />
                </a>
              </div>
            ))}
          </div>
          <div className="flex md:px-48 px-8 justify-between items-center">
            {coorganizers.map((coorganizer, index) => (
              <div className="inline-block w-48 text-center" key={index}>
                <a href={coorganizer.url}>
                  <img className="max-h-32 inline-block" src={coorganizer.img} />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[30px] bg-white p-12 md:pb-32 pb-16">
          <div className="text-background font-normal md:text-5xl text-3xl md:mb-14 mb-7">
            Supported by:
          </div>
          {/* <p className="text-center">To be announced soon!</p> */}
          <div className="flex flex-wrap justify-between items-center">
            {supporters.map((supporter, index) => (
              <div key={index} className="inline-block w-48 text-center">
                <a href={supporter.url || ''}>
                  {supporter.img && (
                    <img className="max-h-32 inline-block" src={supporter.img} />
                  )}
                  {!supporter.img && supporter.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
