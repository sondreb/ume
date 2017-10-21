import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing';
import { CommunitiesModule } from './communities/communities.module';
import { CreateModule } from './create/create.module';
import { SecurityModule } from './security/security.module';
import { SettingsModule } from './settings/settings.module';
import { WipeModule } from './wipe/wipe.module';
import { IntroductionComponent } from './introduction/introduction.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		IntroductionComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FlexLayoutModule,
		MaterialModule,
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
