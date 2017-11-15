import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicRoutingModule } from './topic.routing';
import { HomeComponent } from './home/home.component';
import { TopicComponent } from './topic.component';
import { FrameworkModule } from '../framework';
import { CreateTopicComponent } from './create/create.component';

@NgModule({
	imports: [
		CommonModule,
		TopicRoutingModule,
		FrameworkModule
	],
	exports: [TopicRoutingModule],
	declarations: [HomeComponent, TopicComponent, CreateTopicComponent]
})
export class TopicModule { }
