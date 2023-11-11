import React from 'react'

const Comp = ({ ...rest }) => {
  return (
    <div {...rest}>Comp</div>
  )
}

export default Comp