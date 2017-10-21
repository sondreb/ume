import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WipeRoutingModule } from './wipe.routing';
import { HomeComponent } from './home/home.component';
import { WipeComponent } from './wipe.component';

@NgModule({
	imports: [
		CommonModule,
		WipeRoutingModule
	],
	exports: [WipeRoutingModule],
	declarations: [HomeComponent, WipeComponent]
})
export class WipeModule { }
