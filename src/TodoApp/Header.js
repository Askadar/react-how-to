import React from 'react';

import UsersSelect from './UsersSelect';
import {actions} from './reducer';

import { connect } from 'react-redux'

const Header = ({ users, selectedUserId, selectUser }) =>
<div className="todos">
	<UsersSelect
		users={users}
		selectedUserId={selectedUserId}
		onChange={selectUser}
	/>
</div>

export default connect(
	state => state.todoReducer,
	actions,
)(Header);
