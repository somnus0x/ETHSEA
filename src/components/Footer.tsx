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
  }
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
    <footer className="bg-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-4">
          <div className="flex justify-center items-start">
            <h3 className="text-white mb-2">PRESENTED BY:</h3>
            {organizers.map((item) => (
              <div key={item.id}>{item.name}</div>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <h3 className="font-bold mb-2">SUPPORTED BY:</h3>
          <div className="flex space-x-4">
            {supporters.map((item) => (
              <div key={item.id}>{item.name}</div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
