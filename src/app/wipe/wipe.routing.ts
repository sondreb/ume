import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WipeComponent } from './wipe.component';

const routes: Routes = [
	{
		path: 'wipe',
		component: WipeComponent,
		children: [
			{ path: '', component: HomeComponent }
		],
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class WipeRoutingModule { }
