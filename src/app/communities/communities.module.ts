import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunitiesRoutingModule } from './communities.routing';
import { HomeComponent } from './home/home.component';
import { CommunitiesComponent } from './communities.component';

@NgModule({
	imports: [
		CommonModule,
		CommunitiesRoutingModule
	],
	exports: [CommunitiesRoutingModule],
	declarations: [HomeComponent, CommunitiesComponent]
})
export class CommunitiesModule { }
