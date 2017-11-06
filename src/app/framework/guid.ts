export class Guid {
	public static zero = '00000000-0000-0000-0000-000000000000';

	private static emptyGuid = new Guid('00000000-0000-0000-0000-000000000000');
	private id: string;

	public static empty() {
		return Guid.emptyGuid;
	}

	public static newGuid() {
		return new Guid(
			Guid.s4() + Guid.s4() + '-' + Guid.s4() + '-' + Guid.s4() + '-' +
			Guid.s4() + '-' + Guid.s4() + Guid.s4() + Guid.s4()
		);
	}

	public static regex(format?: string) {
		switch (format) {
			case 'x':
			case 'X':
				return (/\{[a-z0-9]{8}(?:-[a-z0-9]{4}){3}-[a-z0-9]{12}\}/i);

			default:
				return (/[a-z0-9]{8}(?:-[a-z0-9]{4}){3}-[a-z0-9]{12}/i);
		}
	}

	private static s4() {
		return Math
			.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	}

	constructor(id: string) {
		this.id = id.toLowerCase();
	}

	public toString(format: string = '') {
		switch (format) {
			case 'x':
			case 'X':
				return '{' + this.id + '}';

			default:
				return this.id;
		}
	}

	public valueOf() {
		return this.id;
	}
}
