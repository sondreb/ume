import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunitiesRoutingModule } from './communities.routing';
import { HomeComponent } from './home/home.component';
import { CommunitiesComponent } from './communities.component';
import { FrameworkModule } from '../framework';
import { CreateCommunityComponent } from './create/create.component';

@NgModule({
	imports: [
		CommonModule,
		CommunitiesRoutingModule,
		FrameworkModule
	],
	exports: [CommunitiesRoutingModule],
	declarations: [HomeComponent, CommunitiesComponent, CreateCommunityComponent]
})
export class CommunitiesModule { }
