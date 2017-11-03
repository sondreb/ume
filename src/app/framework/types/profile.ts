export class Profile {
	public id: string;  // ID should be he publicKeyFingerprint from Identity.
	public nickname: string;
	public name: string;
	public email: string;
	public phone: string;
	public location: string;
	public type = 'Profile';
}
