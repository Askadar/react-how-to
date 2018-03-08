import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ColoredDiv extends React.Component{
	render() {
		const {color, fontSize: fz } = this.props;
		return (<div style={{background: this.props.bgColor, color, fontSize: fz}}>
			{Math.random() >= 0.5 ? 'Me colored, yay!' : 'Me no random!'}
		</div>);
	}
}

ReactDOM.render(<ColoredDiv color="red" bgColor="green" fontSize="14px"/>, document.getElementById('root'));


// registerServiceWorker();
