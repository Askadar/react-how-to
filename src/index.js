import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const ColoredDiv = ({color, fontSize: fz, rows, ...props }) => 
<div style={{background: props.bgColor, color, fontSize: fz}}>
	{rows.map(row => <li>{row}</li>)}
</div>

ReactDOM.render(<ColoredDiv color="#ab00ff" bgColor="white" fontSize="14px" rows={['Me colored, yay!', 'Me colored, nope second try!', 'No random is it!', ]}/>, document.getElementById('root'));


// registerServiceWorker();
