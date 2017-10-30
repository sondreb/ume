import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrameworkModule } from './framework/framework.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing';
import { CommunitiesModule } from './communities/communities.module';
import { CreateModule } from './create/create.module';
import { SecurityModule } from './security/security.module';
import { SettingsModule } from './settings/settings.module';
import { WipeModule } from './wipe/wipe.module';
import { IntroductionComponent } from './introduction/introduction.component';
import { HttpModule } from '@angular/http';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		IntroductionComponent,
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
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
