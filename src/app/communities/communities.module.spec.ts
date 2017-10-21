import { CommunitiesModule } from './communities.module';

describe('CommunitiesModule', () => {
	let settingsModule: CommunitiesModule;

	beforeEach(() => {
		settingsModule = new CommunitiesModule();
	});

	it('should create an instance', () => {
		expect(settingsModule).toBeTruthy();
	});
});
