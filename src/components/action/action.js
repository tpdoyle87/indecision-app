import React from 'react'


const Action = (props) => (
      <button disabled={props.disable} className="launch-button" onClick={props.onMakeDecision}>What should I do?</button>
    );


export default Action;
