import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';

@NgModule({
	imports: [
		MaterialModule,
		CommonModule
	],
	exports: [MaterialModule],
	declarations: []
})
export class FrameworkModule { }
