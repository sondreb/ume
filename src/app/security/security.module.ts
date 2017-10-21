import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityRoutingModule } from './security.routing';
import { HomeComponent } from './home/home.component';
import { SecurityComponent } from './security.component';

@NgModule({
	imports: [
		CommonModule,
		SecurityRoutingModule
	],
	exports: [SecurityRoutingModule],
	declarations: [HomeComponent, SecurityComponent]
})
export class SecurityModule { }
