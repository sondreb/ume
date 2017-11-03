import { WipeModule } from './wipe.module';

describe('WipeModule', () => {
	let settingsModule: WipeModule;

	beforeEach(() => {
		settingsModule = new WipeModule();
	});

	it('should create an instance', () => {
		expect(settingsModule).toBeTruthy();
	});
});
