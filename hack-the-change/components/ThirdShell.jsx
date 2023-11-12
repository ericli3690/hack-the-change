import React from 'react'

const ThirdShell = ({ children }) => {
  return (
    <div className="h-[calc(100vh-11rem)] m-2 overflow-y-scroll no-scrollbar">{children}</div>
  )
}

export default ThirdShell