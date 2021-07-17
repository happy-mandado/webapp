import { combineReducers } from 'redux'

import appReducer from './app'
import listsReducer from './lists'
import draftReducer from './draft'
import userReducer from './user'


const suggestedProductsReducer = (state = new Map(), action) => {
	return state
}

const rootReducer = combineReducers({
	app: appReducer,
	user: userReducer,
	lists: listsReducer,
	draft: draftReducer,
	suggestedProducts: suggestedProductsReducer,
});

export default rootReducer;
