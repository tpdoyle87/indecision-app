import React from 'react'

const Header = (props) => (
    <div className='header'>
      <div className="container">
        <h1 className='header__title'>{props.title}</h1>
        {props.subtitle && <h6 className="header__subtitle">{props.subtitle}</h6>}
      </div>
    </div>
  )

  Header.defaultProps = {
    title: "Some Title"
  }

export default Header
