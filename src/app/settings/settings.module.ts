import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings.routing';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SettingsComponent } from './settings.component';
import { FrameworkModule } from '../framework';
import { LicensesComponent } from './licenses/licenses.component';
import { GatewayDialogComponent } from './gateway-dialog/gateway-dialog.component';

@NgModule({
	imports: [
		CommonModule,
		SettingsRoutingModule,
		FrameworkModule
	],
	exports: [SettingsRoutingModule],
	declarations: [HomeComponent, AboutComponent, SettingsComponent, LicensesComponent, GatewayDialogComponent],
	entryComponents: [
		GatewayDialogComponent
	]
})
export class SettingsModule { }
