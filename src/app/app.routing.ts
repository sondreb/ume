import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { NetworkComponent } from './network/network.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'home', pathMatch: 'full', redirectTo: '' },
	{ path: 'introduction', component: IntroductionComponent, data: { breadcrumb: 'Introduction' } },
	{ path: 'network', component: NetworkComponent, data: { breadcrumb: 'Network' } },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent,
	IntroductionComponent,
	NetworkComponent];
