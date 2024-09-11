import React from 'react'

const faqs = [
  {
    id: "devcon",
    question: "What is the difference between Ethereum SEA Day and Devcon SEA?",
    answer: "While both Ethereum SEA Day and Devcon SEA are happening in the same venue, Ethereum SEA Day is a 1-day event specifically designed for the general public to learn about Ethereum and decentralization, all in one single day. Devcon SEA, on the otherhand, is an intensive 4-day event covering both the breadth and depth of the latest developments in Ethereum and its ecosystem."
  },
  {
    id: "refunds-and-transfers",
    question: "What are the policies towards refunds & transfers?",
    answer: "All tickets are final and non-refundable. In our effort to prevent scalping and ensure equal opportunity for all interested community members to be able to purchase tickets, we will only allow ticket transfers on a case-by-case basis upon written request to support@ethsea.org."
  },
  {
    id: "food",
    question: "Will there be food at the venue?",
    answer: "Yes, all tickets include access to lunch, and all-day snacks."
  },
]

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((item) => (
            <div key={item.id} className="bg-white p-4 shadow-md">
              <h3 className="font-bold mb-2">{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
