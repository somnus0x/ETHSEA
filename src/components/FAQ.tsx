import React from 'react'

const faqs = [
  {
    id: 'devcon',
    question: 'What is the difference between Ethereum SEA Day and Devcon SEA?',
    answer:
      'While both Ethereum SEA Day and Devcon SEA are happening in the same venue, Ethereum SEA Day is a 1-day event specifically designed for the general public to learn about Ethereum and decentralization, all in one single day. Devcon SEA, on the otherhand, is an intensive 4-day event covering both the breadth and depth of the latest developments in Ethereum and its ecosystem.',
    color: 'text-secondary',
  },
  {
    id: 'refunds-and-transfers',
    question: 'What are the policies towards refunds & transfers?',
    answer:
      'All tickets are final and non-refundable. In our effort to prevent scalping and ensure equal opportunity for all interested community members to be able to purchase tickets, we will only allow ticket transfers on a case-by-case basis upon written request to support@ethsea.org.',
    color: 'text-primary',
  },
  {
    id: 'food',
    question: 'Will there be food at the venue?',
    answer: 'Yes, all tickets include access to lunch, and all-day snacks.',
    color: 'text-yellow',
  },
]

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="relative pb-32">
      <div className="container mx-auto px-4">
        <img
          src="/images/faq-adornment.png"
          className="absolute top-[-32px] left-[-96px]"
        />
        <div className="text-6xl text-white font-normal mb-12">FAQ</div>
        <div className="space-y-4">
          {faqs.map((item) => (
            <div key={item.id} className="p-4  ">
              <h3 className={`font-bold mb-2 text-3xl ${item.color}`}>
                {item.question}
              </h3>
              <p className="text-2xl text-white">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
