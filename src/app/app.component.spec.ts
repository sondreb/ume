import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FrameworkModule } from './framework/framework.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { AppRoutingModule, routingComponents } from './app.routing';
// import { CommunitiesModule } from './communities/communities.module';
// import { CreateModule } from './create/create.module';
// import { SecurityModule } from './security/security.module';
// import { SettingsModule } from './settings/settings.module';
// import { WipeModule } from './wipe/wipe.module';
// import { IntroductionComponent } from './introduction/introduction.component';
// import { HttpModule } from '@angular/http';

import { AppModule } from './app.module';

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				AppModule
			]
		}).compileComponents();
	}));
	it('should create the app', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));
	it(`should have as title 'app'`, async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app.title).toEqual('app');
	}));
	// it('should render title in a h1 tag', async(() => {
	// 	const fixture = TestBed.createComponent(AppComponent);
	// 	fixture.detectChanges();
	// 	const compiled = fixture.debugElement.nativeElement;
	// 	expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
	// }));
});
