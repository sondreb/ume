import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityRoutingModule, routingComponents } from './security.routing';
import { HomeComponent } from './home/home.component';
import { SecurityComponent } from './security.component';
import { FrameworkModule } from '../framework';


@NgModule({
	imports: [
		CommonModule,
		SecurityRoutingModule,
		FrameworkModule
	],
	exports: [SecurityRoutingModule],
	declarations: [routingComponents]
})
export class SecurityModule { }
