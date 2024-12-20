import React from 'react'

const organizers = [
  {
    id: 'ethpadthai',
    name: 'EthPadThai',
    url: 'https://ethpadthai.org',
    img: '/organizers/ethpadthai.jpeg',
    extraClasses: '',
  },
  {
    id: 'ethereumsingapore',
    name: 'EthereumSingapore',
    url: 'https://www.ethereumsingapore.com',
    img: '/organizers/ethsg.png',
    extraClasses: '',
  },
  {
    id: 'ethkl',
    name: 'ETHKL',
    url: 'https://www.ethkl.org/',
    img: '/organizers/ETHKL.png',
    extraClasses: '',
  },
  {
    id: 'eth63',
    name: 'ETH63',
    url: 'https://www.facebook.com/eth63.ph',
    img: '/organizers/ETH63.png',
    extraClasses: '',
  },
]
const coorganizers = [
  {
    id: 'web3saigon',
    name: 'Web3 Saigon',
    url: 'https://x.com/Web3Saigon',
    img: '/organizers/web3saigon.png',
    extraClasses: '',
  },
  {
    id: 'ethereumindonesia',
    name: 'Ethereum Indonesia',
    url: 'https://x.com/eth_indo',
    img: '/organizers/ethindonesia.jpeg',
    extraClasses: '',
  },
  {
    id: 'web3together',
    name: 'Web3 Together',
    url: 'https://www.facebook.com/Web3Together/',
    img: '/organizers/web3together.png',
    extraClasses: '',
  },
  {
    id: 'pagoda',
    name: 'Pagoda',
    url: 'https://pagoda.wtf',
    img: '/organizers/pagoda.png',
    extraClasses: '',
  },
  {
    id: 'ethvietnam',
    name: 'ETHVietnam',
    url: 'https://www.eth-vietnam.com/',
    img: '/organizers/ethvietnam.png',
    extraClasses: '',
  },
]

const supporters = [
  // Non-profit / communities
  {
    id: 'devcon',
    name: 'Devcon',
    url: 'https://devcon.org',
    img: '/supporters/devcon.png',
    extraClasses: '',
  },
  {
    id: 'depa',
    name: 'DEPA',
    url: 'https://www.depa.or.th/th/home',
    img: '/supporters/depa.png',
    extraClasses: '',
  },
  {
    id: 'cubs',
    name: 'Chulalongkorn University Blockchain Society',
    url: 'https://www.instagram.com/cubs.chula',
    img: '/supporters/cubs.png',
    extraClasses: '',
  },
  {
    id: 'thbuidl',
    name: 'THBUIDL',
    url: 'https://x.com/THBUIDL',
    img: '/supporters/thbuidl.png',
    extraClasses: 'px-4',
  },
  {
    id: 'apubcc',
    name: 'APUBCC',
    url: 'https://apubcc.org',
    img: '/supporters/apubcc.png',
    extraClasses: '',
  },
  {
    id: 'sunway',
    name: 'Sunway Blockchain Club',
    url: 'https://sunwayblockchain.com',
    img: '/supporters/sunway.png',
    extraClasses: '',
  },
  {
    id: 'web3village',
    name: 'Web3 Village',
    url: 'https://www.web3villages.com/',
    img: '/supporters/web3village.png',
    extraClasses: '',
  },
  {
    id: 'collegedao',
    name: 'College DAO',
    url: 'https://collegedao.io/',
    img: '/supporters/collegedao.png',
    extraClasses: '',
  },
  // Media,
  {
    id: 'bitcoinaddict',
    name: 'Bitcoin Addict Thailand',
    url: 'https://bitcoinaddict.org/',
    img: '/supporters/bitcoinaddict.png',
    extraClasses: '',
  },
  {
    id: 'techsauce',
    name: 'Techsauce',
    url: 'https://techsauce.co/',
    img: '/supporters/techsauce.png',
    extraClasses: '',
  },
  // Companies
  {
    id: 'kyber',
    name: 'Kyber',
    url: 'https://kyber.network',
    img: '/supporters/kyber.png',
    extraClasses: 'md:px-16',
  },
  {
    id: 'cleverse',
    name: 'Cleverse',
    url: 'https://cleverse.com',
    img: '/supporters/cleverse.png',
    extraClasses: '',
  },
  {
    id: 'cdao',
    name: 'ContributionDAO',
    url: 'https://www.contributiondao.com/',
    img: '/supporters/cdao.png',
    extraClasses: 'md:px-2 px-2',
  },
  {
    id: 'smallworld',
    name: 'Smallworld',
    url: 'https://smallworldventure.com/',
    img: '/supporters/smallworld.png',
    extraClasses: '',
  },
  {
    id: 'exponent',
    name: 'Exponent AI',
    url: 'https://www.exponent.ai/',
    img: '/supporters/exponent.png',
    extraClasses: '',
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
          <div className="md:flex md:flex-wrap px-8 md:self-center md:justify-around md:items-center">
            {organizers.map((organizer, index) => (
              <div
                className={`md:inline-block md:max-w-64 mb-8 mx-auto text-center ${organizer.extraClasses}`}
                key={index}
              >
                <a target="_blank" href={organizer.url}>
                  <img
                    className="max-h-32 inline-block"
                    src={organizer.img}
                    alt={`Logo of ${organizer.name}`}
                  />
                </a>
              </div>
            ))}
          </div>
          <div className="md:flex md:flex-wrap px-8 md:self-center md:justify-around md:items-center">
            {coorganizers.map((coorganizer, index) => (
              <div
                className={`md:inline-block md:max-w-48 mb-8 mx-auto text-center ${coorganizer.extraClasses}`}
                key={index}
              >
                <a target="_blank" href={coorganizer.url}>
                  <img
                    className="max-h-32 inline-block"
                    src={coorganizer.img}
                    alt={`Logo of ${coorganizer.name}`}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[30px] bg-white p-12">
          <div className="text-background font-normal md:text-5xl text-3xl md:mb-14 mb-7">
            Supported by:
          </div>
          <div className="md:flex md:flex-wrap self-center justify-around items-center md:px-24">
            {supporters.map((supporter, index) => (
              <div
                className={`md:inline-block md:px-8 md:py-4 text-center md:basis-1/4 ${supporter.extraClasses}`}
                key={index}
              >
                <a href={supporter.url || ''}>
                  {supporter.img && (
                    <img
                      className="max-h-16 md:max-h-24 mb-12 md:mb-6 inline-block"
                      src={supporter.img}
                      alt={`Logo of ${supporter.name}`}
                    />
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
