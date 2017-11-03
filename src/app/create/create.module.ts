import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRoutingModule } from './create.routing';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create.component';
import { FrameworkModule } from '../framework';

@NgModule({
	imports: [
		CommonModule,
		CreateRoutingModule,
		FrameworkModule
	],
	exports: [CreateRoutingModule],
	declarations: [HomeComponent, CreateComponent]
})
export class CreateModule { }
