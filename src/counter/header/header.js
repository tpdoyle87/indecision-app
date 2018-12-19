import React from 'react'

console.log('hello')

const Header = (props) => {
  return(
    <div>
      <h1>Count: {props.count}</h1>
    </div>
  );
}

export default Header
