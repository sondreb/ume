import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrameworkModule } from './framework';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule, routingComponents } from './app.routing';
import { CommunitiesModule } from './communities/communities.module';
import { CreateModule } from './create/create.module';
import { SecurityModule } from './security/security.module';
import { SettingsModule } from './settings/settings.module';
import { WipeModule } from './wipe/wipe.module';
import { IntroductionComponent } from './introduction/introduction.component';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
	declarations: [
		AppComponent,
		routingComponents
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpModule,
		FrameworkModule,
		AppRoutingModule,
		CommunitiesModule,
		CreateModule,
		SecurityModule,
		SettingsModule,
		WipeModule
	],
	providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
	bootstrap: [AppComponent]
})
export class AppModule { }
