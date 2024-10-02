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
    id: 'transfers-and-refunds',
    question: 'What are the policies towards transfers & refunds?',
    answer:
      'All ticket types are transferable. Refunds are allowed on a case-by-case basis upon written request to support@ethsea.org.',
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
    <section id="faq" className="relative md:pb-32 pb-16">
      <div className="container mx-auto md:px-4 px-8">
        <img
          src="/images/faq-adornment.png"
          className="absolute top-[-32px] left-[-96px]"
        />
        <div className="md:text-5xl text-3xl text-white font-normal mb-12">FAQ</div>
        <div className="space-y-4">
          {faqs.map((item) => (
            <div key={item.id} className="p-4  ">
              <h3 className={`font-bold mb-2 md:text-3xl text-2xl ${item.color}`}>
              <img className="text-[#FCE300] inline mr-2" src="/images/arrow-right.svg" />
                {item.question}
              </h3>
              <p className="md:text-2xl text-xl text-white">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
