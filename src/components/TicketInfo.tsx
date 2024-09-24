import React from 'react'
import TicketInfoBox from './TicketInfoBox'

const TicketInfo: React.FC = () => {
  return (
    <section id="ticket-info" className="bg-secondary rounded-t-3xl pb-24">
      <div className="container mx-auto py-4">
        <div className="mt-14 flex justify-center items-center">
          <div className="flex text-[#2C40BA] text-5xl uppercase font-semibold">
            <img className="mr-12" src="/images/ticket-info.svg" alt="ticket" />
            Ticket Info
            <img className="ml-12" src="/images/ticket-info.svg" alt="ticket" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-16">
          <TicketInfoBox
            title="Full Access"
            type="General Admission"
            description="Full access to all sessions, networking opportunities, and refreshments."
            price="10 USD"
          />
          <TicketInfoBox
            title="Full Access"
            type="Scholars Ticket"
            description="For students, artists, builders, academics and everyone who are taking their journey into Ethereum. Apply by letting us know how you have been and/or planning to build in the Ethereum ecosystem. Receive the same benefits as the General Admission ticket."
            price="FREE (Application Required)"
          />
        </div>
      </div>
    </section>
  )
}

export default TicketInfo
