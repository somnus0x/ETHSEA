import React from 'react'

const organizers = [
  {
    id: 'ethpadthai',
    name: 'EthPadThai',
    url: 'https://ethpadthai.org',
    img: null,
  },
  {
    id: 'ethkl',
    name: 'ETHKL',
    url: 'https://www.ethkl.org/',
    img: null,
  },
  {
    id: 'ethereumsingapore',
    name: 'EthereumSingapore',
    url: 'https://www.ethereumsingapore.com',
    img: null,
  },
  {
    id: 'eth63',
    name: 'ETH63',
    url: 'https://www.facebook.com/eth63.ph',
    img: null,
  },
  {
    id: 'ethereumindonesia',
    name: 'Ethereum Indonesia',
    url: 'https://x.com/eth_indo',
    img: null,
  },
  {
    id: 'pagoda',
    name: 'Pagoda',
    url: 'https://pagoda.wtf',
    img: null,
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
        </div>
        <div className="rounded-[30px] bg-white p-12 pb-32">
          <div className="text-background font-normal text-6xl mb-14">
            Supported by:
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
