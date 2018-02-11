import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { Routes, RouterModule } from '@angular/router';
import { ScrollDirective } from './scroll.directive';
import { ApplicationState } from './application-state';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LocalStorageService } from './local-storage';
import { StorageService } from './storage';
import { EqualValidator } from './equal-validator.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth-guard';

@NgModule({
	imports: [
		FlexLayoutModule,
		MaterialModule,
		RouterModule,
		CommonModule,
		FormsModule,

	],
	exports: [FlexLayoutModule, MaterialModule, FormsModule, ReactiveFormsModule, BreadcrumbComponent, ScrollDirective, ToolbarComponent],
	providers: [ApplicationState, LocalStorageService, StorageService, AuthGuard],
	declarations: [BreadcrumbComponent, ScrollDirective, ToolbarComponent, EqualValidator]
})
export class FrameworkModule { }
