import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
	imports: [
		MaterialModule,
		RouterModule,
		CommonModule
	],
	exports: [MaterialModule, BreadcrumbComponent],
	declarations: [BreadcrumbComponent]
})
export class FrameworkModule { }
