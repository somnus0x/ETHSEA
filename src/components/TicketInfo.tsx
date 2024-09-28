import React from 'react'
import CallToAction from './CallToAction'
import Button from './Button'

const TicketInfo: React.FC = () => {
  return (
    <section id="ticket-info" className="md:pb-24 pb-14">
      <div className="container mx-auto md:px-4 px-8 py-4">
        <div className="rounded-[30px] bg-white p-12 mb-4">
          <div className="text-background font-normal md:text-5xl text-3xl mb-14">
            Get your tickets
          </div>
          <div className="flex text-2xl">
            <span className="text-primary mr-6">Full Access</span>
            <span className="text-background">5 USD</span>
          </div>
          <div className="flex pb-9 border-b border-b-primary">
            <div>
              <div className="text-background md:text-5xl text-3xl">
                General Admission
              </div>
              <div className="text-background md:text-2xl text-xl mt-3">
                Enjoy full access to Ethereum SEA Day, including all talks, workshops
                and networking. Lunch, all-day snacks and swag included. No questions
                asked.
              </div>
            </div>
            <div>
              <Button link="">Purchase</Button>
            </div>
          </div>
          <div className="flex md:text-2xl text-xl mt-14">
            <span className="text-primary mr-6">Full Access</span>
            <span className="text-background">Free</span>
          </div>
          <div className="flex pb-9 ">
            <div>
              <div className="text-background md:text-5xl text-3xl">
                Scholars Ticket
              </div>
              <div className="text-background md:text-2xl text-xl mt-3">
                For students, artists, builders, academics and everyone who are
                taking their journey into Ethereum. Apply by letting us know how you
                have been and/or planning to build in the Ethereum ecosystem. Receive
                the same benefits as the General Admission ticket.
              </div>
            </div>
            <div>
              <Button link="">Apply Now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TicketInfo
