import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommunitiesComponent } from './communities.component';

const routes: Routes = [
	{
		path: 'communities',
		component: CommunitiesComponent,
		children: [
			{ path: '', component: HomeComponent }
		],
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CommunitiesRoutingModule { }
