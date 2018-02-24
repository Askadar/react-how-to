import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const StateLessComponent = ({text}) =>
<div>
	<span>{text}</span>
</div>

class StateFullComponent extends Component {
	state = {
		text: 'Heya Earthlings!'
	}
	render(){
		return (
			<StateLessComponent text={this.state.text}/>
		);
	}
}

ReactDOM.render(<StateFullComponent/>, document.getElementById('root'));
