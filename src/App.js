import React, { Component } from 'react';
import './App.css';

const LabeledInput = ({children, name, value, onChange, type="text"}) =>
console.log(children) || <div className="input-group">
	<label htmlFor={name}>{children} </label>
	<input type={type} id={name} name={name} value={value} onChange={onChange}/>
</div>

class App extends Component {
	// constructor(p) {
	//     super(p);
	//     this.state = {
	//         demo: '',
	//         name: '',
	//         password: ''
	//     }
	// }
	state = {
		demo: '',
		name: '',
		password: ''
	}
	render() {
		const handleInput = (e) => this.setState({
			[e.target.name]: e.target.value
		});
		const {
			demo, name, password
		} = this.state;
		return (<div className="form-container App">
			<form action="" onSubmit={(e) => e.preventDefault() || console.log(this.state)}>
				<LabeledInput value={demo} name="demo" onChange={handleInput}>
					First label text
					<LabeledInput value={name}></LabeledInput>
				</LabeledInput>
				<LabeledInput value={name} name="name" onChange={handleInput}>
					Namu?
				</LabeledInput>
				<LabeledInput value={password} name="password"onChange={handleInput} type="password">
					Passwort
				</LabeledInput>
			</form>
			<div class="output">
				{
					Object.entries(this.state).map(arr =>
						arr[1] !== '' && <div>{arr[0]}: {arr[1]}</div>
					)
				}
			</div>
		</div>);
	}
}

export default App;
