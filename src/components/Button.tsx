import React from 'react'

export interface Props {
  link: string
  children?: React.ReactNode
}

const Button: React.FC<Props> = ({ children, link }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      className="inline-block bg-[#FCE300] text-background text-center px-8 py-3 rounded-[30px] text-lg font-semibold cursor-pointer"
    >
      {children}
    </a>
  )
}

export default Button
