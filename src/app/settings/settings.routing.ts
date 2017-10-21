import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
	{
		path: 'settings',
		component: SettingsComponent,
		children: [
			{ path: '', component: HomeComponent },
			{ path: 'about', component: AboutComponent }
		],
	},
	{
		path: 'about',
		component: AboutComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SettingsRoutingModule { }
