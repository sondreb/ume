import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WipeRoutingModule } from './wipe.routing';
import { HomeComponent } from './home/home.component';
import { WipeComponent } from './wipe.component';
import { FrameworkModule } from '../framework/framework.module';

@NgModule({
	imports: [
		CommonModule,
		WipeRoutingModule,
		FrameworkModule
	],
	exports: [WipeRoutingModule],
	declarations: [HomeComponent, WipeComponent]
})
export class WipeModule { }
