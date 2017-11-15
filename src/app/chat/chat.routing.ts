import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat.component';
import { CreateChatComponent } from './create/create.component';

const routes: Routes = [
	{
		path: 'chat',
		component: ChatComponent,
		children: [
			{ path: ':id', component: HomeComponent },
			{ path: 'create', component: CreateChatComponent }
		],
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ChatRoutingModule { }

export const chatRoutes = routes;
