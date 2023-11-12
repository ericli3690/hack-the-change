import React from 'react'

const NavButton = ({ clickFunc, children, className }) => {
  return (
    <div onClick={clickFunc} className={("h-16 hover:cursor-pointer mx-1 transition-all flex-grow hover:bg-lime-300 " + className)}>{children}</div>
  )
}

export default NavButton