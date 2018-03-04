import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './controllers/home/home.component';
import { IntroductionComponent } from './controllers/introduction/introduction.component';
import { NetworkComponent } from './controllers/network/network.component';
import { ChatCreateComponent } from './controllers/chat-create/chat-create.component';
import { ChatComponent } from './controllers/chat/chat.component';
import { AuthGuard } from './framework/auth-guard';
import { WipeComponent } from './controllers/wipe/wipe.component';
import { TopicComponent } from './controllers/topic/topic.component';
import { SettingsComponent } from './controllers/settings/settings.component';
import { AboutComponent } from './controllers/about/about.component';
import { LicensesComponent } from './controllers/licenses/licenses.component';
import { SecurityIntroductionComponent } from './controllers/security-introduction/security-introduction.component';
import { IdentityRestoreComponent } from './controllers/identity-restore/identity-restore.component';
import { IdentityGenerateComponent } from './controllers/identity-generate/identity-generate.component';
import { CreateCommunityComponent } from './controllers/community-create/community-create.component';
import { CreateIdentityComponent } from './controllers/security-create/security-create.component';
import { CreateComponent } from './controllers/create/create.component';
import { CreateInviteComponent } from './controllers/create-invite/create-invite.component';
import { CommunitiesComponent } from './controllers/communities/communities.component';
import { IdentityComponent } from './controllers/identity/identity.component';
import { SecurityComponent } from './controllers/security/security.component';
import { TopicCreateComponent } from './controllers/topic-create/topic-create.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'home', pathMatch: 'full', redirectTo: '' },
	{
		path: 'network',
		component: NetworkComponent,
		canActivate: [AuthGuard],
		data: { breadcrumb: 'Network' }
	},
	{
		path: 'chat',
		component: ChatComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'chat/create',
		component: ChatCreateComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'wipe',
		component: WipeComponent,
		data: { breadcrumb: 'Clear Device' }
	},
	{
		path: 'topic',
		component: TopicComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'settings',
		component: SettingsComponent,
		canActivate: [AuthGuard],
		data: { breadcrumb: 'Settings' }
	},
	{
		path: 'settings/about',
		component: AboutComponent,
		canActivate: [AuthGuard],
		data: { breadcrumb: 'About', back: '/settings' }
	},
	{
		path: 'settings/licenses',
		component: LicensesComponent,
		canActivate: [AuthGuard],
		data: { breadcrumb: 'Licenses', back: '/settings' }
	},
	{
		path: 'introduction',
		component: IntroductionComponent,
		data: { breadcrumb: 'Introduction' }
	},
	{
		path: 'security',
		component: SecurityIntroductionComponent,
		data: { breadcrumb: 'Security brief' }
	},
	{
		path: 'identity/restore',
		component: IdentityRestoreComponent,
		data: { breadcrumb: 'Restore' }
	},
	{
		path: 'identity/generate',
		component: IdentityGenerateComponent,
		data: { breadcrumb: 'Generate' }
	},
	{
		path: 'identity/:id',
		component: IdentityComponent,
		data: { breadcrumb: 'Generate' }
	},

	// {
	// 	path: 'security',
	// 	component: SecurityComponent,
	// 	canActivate: [AuthGuard],
	// 	children: [
	// 		{ path: '', component: HomeComponent },
	// 		{ path: 'introduction', component: SecurityIntroductionComponent },
	// 		{ path: 'restore', component: RestoreComponent },
	// 		{ path: 'identities/:id', component: IdentityComponent },
	// 		{ path: 'create', component: CreateIdentityComponent },
	// 		{ path: 'generate', component: GenerateComponent }
	// 	],
	// },
	// {
	// 	path: 'create',
	// 	component: CreateComponent,
	// 	canActivate: [AuthGuard],
	// 	children: [
	// 		{ path: '', component: HomeComponent },
	// 		{ path: 'invite', component: CreateInviteComponent }
	// 	],
	// },
	// {
	// 	path: 'communities',
	// 	component: CommunitiesComponent,
	// 	canActivate: [AuthGuard],
	// 	children: [
	// 		{ path: '', component: HomeComponent },
	// 		{ path: 'create', component: CreateCommunityComponent }
	// 	],
	// }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
	AboutComponent,
	ChatComponent,
	ChatCreateComponent,
	HomeComponent,
	IdentityGenerateComponent,
	IdentityRestoreComponent,
	IntroductionComponent,
	LicensesComponent,
	NetworkComponent,
	SecurityIntroductionComponent,
	SettingsComponent,
	TopicComponent,
	WipeComponent,
	CreateCommunityComponent,
	CreateIdentityComponent,
	CreateInviteComponent,
	CommunitiesComponent,
	IdentityComponent,
	SecurityComponent,
	TopicCreateComponent,
	CreateComponent
];
