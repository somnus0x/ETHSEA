import React from 'react'
import CallToAction from './CallToAction'

interface TicketInfoBoxProps {
  title: string
  type: string
  description: string
  price: string | number
}

const TicketInfoBox: React.FC<TicketInfoBoxProps> = ({
  title,
  type,
  description,
  price,
}) => {
  return (
    <div className="w-[758px] rounded-[30px] bg-white p-8 mb-4">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-xl ">
            {title} {price}
          </div>
          <div className="text-3xl font-semibold">{type}</div>
        </div>
        <CallToAction />
      </div>
      <div className="text-sm mt-4">{description}</div>
    </div>
  )
}

export default TicketInfoBox
