import Agent from './agent'
import Resource from './resource'
import List from './list'
import Suggestion from './suggestion'
import Draft from './draft'
import Product from './product'


class User extends Resource {
	constructor({ id, }, agent) {
		super(agent)

		this.id = id
	}

	draft (draftId) {
		return new Draft({draftId}, this._agent);
	}

}

export default User;
