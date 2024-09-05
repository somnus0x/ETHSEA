import React from 'react'

const faqs = [
  {
    id: "talks",
    question: "Talks",
    answer: "Keynote speeches on Ethereum and blockchain technology"
  },
  {
    id: "workshops",
    question: "Workshops",
    answer: "Interactive workshops and hands-on sessions on building Ethereum-based applications"
  },
  {
    id: "discussions",
    question: "Discussions",
    answer: "Panel discussions on topics such as security, scalability, and adoption"
  },
  {
    id: "exhibits",
    question: "Exhibits",
    answer: "Exhibition area showcasing innovative Ethereum-based solutions"
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
