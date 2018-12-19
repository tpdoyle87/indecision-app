import React from 'react'

import Option from './option'

const Options = (props) => (
      <div>
        <div className="widget-header">
          <h3 className="widget-header__margin">Your Options</h3>
          <button className="button button--link" onClick={props.removeAll}>Remove All</button>
        </div>
        {props.options.length === 0 && <p className="widget-message">Please add on option to get started</p>}
        {props.options.map((option, index) => <Option key={option} option={option} count={index + 1} removeChoice={props.removeChoice} /> )}

      </div>
    );

export default Options
