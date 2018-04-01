import React, { Component } from 'react';
import './App.css';

class FormField extends Component {
	state = {
		focused: false,
	}
	render() {
		const { label, name, type = 'text', value, onChange } = this.props;
		return (
			<div className="field-row">
				<label className="field-label" htmlFor={name}>{label}</label>
				<input className={`field-input field-input-${type}`} type={type} id={name} name={name} value={value} onChange={onChange}/>
			</div>
		);
	}
}

class Form extends Component {
	state = {
		fieldValues: {}
	}
	render() {
		const handleInput = (e) => this.setState({
			[e.target.name]: e.target.value
		});
		const {
			fieldValues,
			demo, name, password
		} = this.state;
		const {
			method, fields, className,
		} = this.props;
		return (<div className="form-container App">
			<form
				action="#" method={method} className={className}
				onSubmit={(e) => e.preventDefault()}>
				{
					fields.map(({label, name, type}) =>
					<FormField
						label={label}
						name={name}
						value={fieldValues[name]}
						type={type}
						onChange={e => this.setState({[name]: e.target.value})}
					/>
					)
				}
			</form>
		</div>);
	}
}
const App = () =>
<div className="form-container App">
	<Form action="#" method="POST" className="zn-form"
		fields={[
			{label: 'Your name', name: 'name', required: true},
			{label: 'Your e-mail', name: 'email', type: 'email', required: true},
			{label: 'Password', name: 'password', type: 'password', required: true},
			{label: 'Your hobby?', name: 'extra'},
		]}/>
</div>

export default App;
