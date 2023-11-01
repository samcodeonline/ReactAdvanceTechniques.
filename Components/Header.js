import React from 'react'
import Nav from './Nav'

const Header = (props) => {

    
  return (
    <div className='headerStyle'>It is the Header component.

        <Nav num={props.num} />
    </div>
  )
}

export default Header