import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ScrollDirective } from './scroll.directive';

@NgModule({
	imports: [
		MaterialModule,
		RouterModule,
		CommonModule,
		FormsModule
	],
	exports: [MaterialModule, FormsModule, BreadcrumbComponent, ScrollDirective],
	declarations: [BreadcrumbComponent, ScrollDirective]
})
export class FrameworkModule { }
