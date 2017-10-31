import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WipeComponent } from './wipe.component';

const routes: Routes = [
	{
		path: 'wipe',
		component: WipeComponent,
		data: { breadcrumb: 'Clear Device' },
		children: [
			{ path: '', component: HomeComponent, data: { breadcrumb: 'Clear Device' } }
		],
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class WipeRoutingModule { }
