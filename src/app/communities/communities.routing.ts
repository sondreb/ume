import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommunitiesComponent } from './communities.component';
import { CreateCommunityComponent } from './create/create.component';

const routes: Routes = [
	{
		path: 'communities',
		component: CommunitiesComponent,
		children: [
			{ path: '', component: HomeComponent },
			{ path: 'create', component: CreateCommunityComponent }
		],
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CommunitiesRoutingModule { }

export const communityRoutes = routes;
