import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRoutingModule } from './create.routing';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create.component';

@NgModule({
	imports: [
		CommonModule,
		CreateRoutingModule
	],
	exports: [CreateRoutingModule],
	declarations: [HomeComponent, CreateComponent]
})
export class CreateModule { }
