import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SecurityComponent } from './security.component';
import { IdentityComponent } from './identity/identity.component';
import { SecurityIntroductionComponent } from './introduction/introduction.component';
import { RestoreComponent } from './restore/restore.component';
import { CreateIdentityComponent } from './create/create.component';
import { GenerateComponent } from './generate/generate.component';

const routes: Routes = [
	{
		path: 'security',
		component: SecurityComponent,
		children: [
			{ path: '', component: HomeComponent },
			{ path: 'introduction', component: SecurityIntroductionComponent },
			{ path: 'restore', component: RestoreComponent },
			{ path: 'identities/:id', component: IdentityComponent },
			{ path: 'create', component: CreateIdentityComponent },
			{ path: 'generate', component: GenerateComponent }
		],
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SecurityRoutingModule { }

export const routingComponents = [HomeComponent,
	SecurityComponent,
	SecurityIntroductionComponent,
	RestoreComponent,
	CreateIdentityComponent,
	GenerateComponent,
	IdentityComponent];
