const initState = {
	users: ['Tom', 'Peter', 'Vanko', 'Monkeyman'],
	selectedUserId: 0,
};

export const types = {
	selectUser: 'SelectUser',
};
export const actions = {
	selectUser: (selectedUserId) => ({
		type: types.selectUser, selectedUserId
	})
};

export default (state = initState, action) => {
	switch(action.type){
		case types.selectUser:
		return {
			...state,
			selectedUserId: +action.selectedUserId,
		}
		default: return state;
	}
};
