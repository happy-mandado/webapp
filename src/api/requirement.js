import Entity from './entity';


class Requirement extends Entity {
	constructor({ id, title, content, step, createdAt, venue }, client) {
		super(id, client)

		this.title = title;
		this.content = content;
		this.step = step;
		this.createdAt = createdAt;
		this.venue = venue;
	}
}

export default Requirement;
