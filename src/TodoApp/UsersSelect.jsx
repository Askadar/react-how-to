import React from 'react';

const UsersSelect = ({users, selectedUserId, onChange}) =>
<select value={selectedUserId} onChange={evt => onChange(evt.target.value)}>
	{ users.map(
		(user, index) => <option key={index} value={index}>{user}</option>
	)}
</select>

export default UsersSelect;
