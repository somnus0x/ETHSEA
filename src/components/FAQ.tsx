import React from 'react'

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">FAQ</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-4 shadow-md">
              <h3 className="font-bold mb-2">Question {item}</h3>
              <p>Answer {item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
