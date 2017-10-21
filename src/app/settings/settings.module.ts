import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings.routing';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SettingsComponent } from './settings.component';

@NgModule({
	imports: [
		CommonModule,
		SettingsRoutingModule
	],
	exports: [SettingsRoutingModule],
	declarations: [HomeComponent, AboutComponent, SettingsComponent]
})
export class SettingsModule { }
