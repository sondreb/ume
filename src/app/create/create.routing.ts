import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create.component';
import { CreateInviteComponent } from './invite/invite.component';

const routes: Routes = [
	{
		path: 'create',
		component: CreateComponent,
		children: [
			{ path: '', component: HomeComponent },
			{ path: 'invite', component: CreateInviteComponent }
		],
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CreateRoutingModule { }
