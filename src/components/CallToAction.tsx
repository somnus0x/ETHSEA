import React from 'react'

const CallToAction: React.FC = () => {
  return (
    <div className="flex items-center">
      <img className="text-[#FCE300] mr-2" src="/images/arrow-right.svg" />
      <a
        href="https://tickets.ethsea.org/"
        target="_blank"
        className="text-[#FCE300] md:text-3xl text-xl underline mr-2"
      >
        Get tickets
      </a>
      <img src="/images/call-to-action-diamond.svg" />
    </div>
  )
}

export default CallToAction
