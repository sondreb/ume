import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRoutingModule } from './create.routing';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create.component';
import { FrameworkModule } from '../framework';
import { CreateInviteComponent } from './invite/invite.component';

@NgModule({
	imports: [
		CommonModule,
		CreateRoutingModule,
		FrameworkModule
	],
	exports: [CreateRoutingModule],
	declarations: [HomeComponent, CreateComponent, CreateInviteComponent]
})
export class CreateModule { }
