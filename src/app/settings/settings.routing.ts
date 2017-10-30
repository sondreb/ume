import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SettingsComponent } from './settings.component';
import { LicensesComponent } from './licenses/licenses.component';

const routes: Routes = [
	{
		path: 'settings',
		component: SettingsComponent,
		data: { breadcrumb: 'Settings' },
		children: [
			{ path: '', component: HomeComponent, data: { breadcrumb: 'Settings' } },
			{ path: 'about', component: AboutComponent, data: { breadcrumb: 'About' } },
			{ path: 'licenses', component: LicensesComponent, data: { breadcrumb: 'Licenses' } }
		],
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SettingsRoutingModule { }
