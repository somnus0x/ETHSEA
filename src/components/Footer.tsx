import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-4">
          <h3 className="font-bold mb-2">PRESENTED BY:</h3>
          <div className="flex space-x-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="w-16 h-8 bg-gray-300"></div>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <h3 className="font-bold mb-2">SUPPORTED BY:</h3>
          <div className="flex space-x-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="w-16 h-8 bg-gray-300"></div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
