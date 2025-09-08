import React from 'react'

const Button = ({text}) => {
  return (
        <button className="text-[#2F73F2] border border-[#2F73F2] bg-transparent px-6 py-3 w-1/2 hover:bg-[#2F73F2] transition-colors duration-500 delay-75 ease-in-out hover:text-white">
          {text}
        </button>
  )
}

export default Button
