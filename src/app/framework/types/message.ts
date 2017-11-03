export class Message {
	public content: any;
	public community: string;
	public user: any;
	public type: string;

	constructor(content) {

		/** The content is encrypted with a user's public key */
		this.content = content;

		this.community = content.community;

		this.user = content.user;

		/** Type on the message is used to know if this is an invite, post or something else. If it is an invite, we won't be attempting to decrypt unless we know the current user is owner of the community. */
		this.type = content.type;
	}

	encrypt() {

		if (!this.user) {
			throw new Error('Cannot encrypt the message without a user id specified.');
		}

	}

	decrypt() {

	}
}
