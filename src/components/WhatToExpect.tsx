import React from 'react'

const list = [
  'Keynote speeches on Ethereum and blockchain technology',
  'Interactive workshops and hands-on sessions on building Ethereum-based applications',
  'Exhibition area showcasing innovative Ethereum-based solutions',
  'Panel discussions on topics such as security, scalability, and adoption',
  'Networking opportunities with 500+ attendees',
  'Exclusive access to the Ethereum SEA Day community',
  'Unwind and enjoy the vibe!',
]

const Item = ({ children, icon }: { children: any; icon: string }) => {
  return (
    <div className="flex items-center mb-4">
      <img className="mr-4" src={icon} />
      <div className="md:text-3xl text-xl font-semibold">{children}</div>
    </div>
  )
}

const WhatToExpect: React.FC = () => {
  return (
    <section id="what-to-expect" className="relative md:pb-28 pb-14">
      <img
        src="/images/what-to-expect-adornment.png"
        className="absolute top-[-32px] left-[-96px] opacity-15 md:opacity-100"
      />
      <div className="container mx-auto md:px-4 px-8 py-4">
        <div className="md:text-5xl text-3xl text-white font-normal mb-12">
          What to expect?
        </div>
        <Item icon="/images/codepen.png">
          <span className="text-secondary">Keynote speeches</span>{' '}
          <span className="text-white">on Ethereum and blockchain technology</span>
        </Item>
        <Item icon="/images/command.png">
          <span className="text-yellow">Interactive workshops</span>
          <span className="text-white"> and</span>
          <span className="text-yellow"> hands-on sessions</span>
          <span className="text-white">
            {' '}
            on building Ethereum-based applications
          </span>
        </Item>
        <Item icon="/images/instagram.png">
          <span className="text-background-secondary">Exhibition area </span>{' '}
          <span className="text-white">
            showcasing innovative Ethereum-based solutions
          </span>
        </Item>
        <Item icon="/images/book-open.png">
          <span className="text-secondary">Panel discussions</span>{' '}
          <span className="text-white">
            {' '}
            on topics such as security, scalability, and adoption
          </span>
        </Item>
        <Item icon="/images/user.png">
          <span className="text-secondary">Networking</span>{' '}
          <span className="text-white"> opportunities with 500+ attendees</span>
        </Item>
        <Item icon="/images/smile.png">
          <span className="text-background-secondary">Exclusive access to the </span>{' '}
          <span className="text-white"> Ethereum SEA Day community</span>
        </Item>
      </div>
    </section>
  )
}

export default WhatToExpect
