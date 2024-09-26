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
    img: '/organizers/web3saigon.jpg',
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
    img: '/organizers/web3together.jpg',
  },
]

const supporters = [
  {
    id: 'devcon',
    name: 'Devcon',
    url: 'https://devcon.org',
    img: null,
  },
]

const Footer: React.FC = () => {
  return (
    <footer className="">
      <div className="container mx-auto px-4 py-32">
        <div className="rounded-[30px] bg-white p-12 mb-32">
          <div className="text-background font-normal text-6xl mb-14">
            Presented by:
          </div>
          <div className="text-center">
            {organizers.map((organizer) => (
              <div className="inline-block w-64 text-center">
                <a href="{organizer.url}">
                  <img className="max-h-32" src={organizer.img} />
                </a>
              </div>
            ))}
          </div>
          <div className="text-center">
            {coorganizers.map((organizer) => (
              <div className="inline-block w-48 text-center">
                <a href="{organizer.url}">
                  <img className="max-h-32" src={organizer.img} />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[30px] bg-white p-12 pb-32">
          <div className="text-background font-normal text-6xl mb-14">
            Supported by:
          </div>
          <p className="text-center">To be announced soon!</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
