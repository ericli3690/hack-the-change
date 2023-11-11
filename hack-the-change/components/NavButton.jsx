import React from 'react'

const NavButton = ({ clickFunc, children, className }) => {
  return (
    <div onClick={clickFunc} className={("bg-lime-200 h-16 flex-grow hover:bg-lime-300 " + className)}>{children}</div>
  )
}

export default NavButton