import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App'


// const app = {
//   title: "Indecision App",
//   subtitle: "Put your life into the hands of a computer!",
//   options: []

// }

// const onFormSubmit = (e) => {
//   e.preventDefault();
//   const option = e.target.elements.option.value
//   if (option) {
//     app.options.push(option);
//     e.target.elements.option.value = ''
//   }
//   renderIndecisionApp()
// }

// const onMakeDecision = () => {
//   const randomNum = Math.floor((Math.random() * app.options.length));
//   const option = app.options[randomNum]
//   alert(option);
// }

// const removeAll = () => {
//   app.options = []
//   renderIndecisionApp()
// }

// const renderIndecisionApp = () => {
//   const template = (
//     <div className='code'>
//       <h1>{app.title}</h1>
//       {app.subtitle && <p>{app.subtitle}</p>}
//       <p>{app.options.length > 0 ? "Here are your options " : "No Options" }</p>
//       <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
//       <button onClick={removeAll}>Remove Options</button>
//       <ol>
//         {app.options.map((option) => <li key={option}>{option}</li>)}
//       </ol>
//       <form onSubmit={onFormSubmit}>
//         <input type="text" name='option'/>
//         <button>Add Option</button>
//       </form>
//     </div>
//   );
//   ReactDOM.render(template, document.getElementById('root'))
// }

// renderIndecisionApp();


ReactDOM.render(<App />, document.getElementById('root'))


