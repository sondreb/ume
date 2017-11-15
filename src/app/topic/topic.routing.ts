import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TopicComponent } from './topic.component';
import { CreateTopicComponent } from './create/create.component';

const routes: Routes = [
	{
		path: 'topic',
		component: TopicComponent,
		children: [
			{ path: ':id', component: HomeComponent },
			{ path: 'create', component: CreateTopicComponent }
		],
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TopicRoutingModule { }

export const topicRoutes = routes;
