import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ScrollDirective } from './scroll.directive';
import { ApplicationState } from './application-state';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
	imports: [
		FlexLayoutModule,
		MaterialModule,
		RouterModule,
		CommonModule,
		FormsModule,

	],
	exports: [FlexLayoutModule, MaterialModule, FormsModule, BreadcrumbComponent, ScrollDirective, ToolbarComponent],
	providers: [ApplicationState],
	declarations: [BreadcrumbComponent, ScrollDirective, ToolbarComponent]
})
export class FrameworkModule { }
