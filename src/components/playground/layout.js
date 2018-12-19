import React from 'react'

const Layout = (props) => {
  return(
    <div>
    <p>header</p>
    {props.content}
    <p>footer</p>
    </div>
  );
};

const template = (
  <div>
    <h1>page titel </h1>
    <p>this is my app!</p>
  </div>
)


export default { Layout, template}
