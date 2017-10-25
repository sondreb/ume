import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroductionComponent } from './introduction/introduction.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'home', pathMatch: 'full', redirectTo: '' },
	{ path: 'introduction', component: IntroductionComponent, data: { breadcrumb: 'Introduction' } },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// import {
// 	AppComponent,
// 	CommunitiesComponent,
// 	CreateComponent,
// 	SecurityComponent,
// 	SettingsComponent,
// 	WipeComponent
// } from './';

// const routes: Routes = [
// 	{ path: 'home', pathMatch: 'full', redirectTo: '' },
// 	{ path: '', component: HomeComponent, canActivate: [AuthenticationGuard] },
// 	{
// 		path: 'login',
// 		component: LoginComponent,
// 		children: [
// 			{ path: '', component: UserLoginComponent },
// 			{ path: 'logout/:userId', component: LogoutComponent },
// 			{ path: 'logout', component: LogoutComponent },
// 			{ path: 'not-found', component: UserNotFoundComponent },
// 			{ path: 'microsoft-login', component: MicrosoftLoginComponent },
// 			{ path: 'pin', component: PinResetComponent },
// 			{ path: 'pin/activate', component: PinUpdateComponent },
// 			{ path: 'code', component: CodeGenerateComponent },
// 			{ path: 'code/activate', component: CodeActivateComponent },
// 			{ path: '**', component: CodeActivateComponent },
// 		]
// 	},
// 	{ path: 'load', component: LoadComponent, canActivate: [AuthenticationGuard] },
// 	{ path: 'profile', component: ProfileComponent, canActivate: [AuthenticationGuard] },
// 	{ path: 'search/:text', component: SearchComponent, canActivate: [AuthenticationGuard] },
// 	{ path: 'forbidden/:url', component: ForbiddenComponent, canActivate: [AuthenticationGuard] },
// ];

// @NgModule({
// 	imports: [RouterModule.forRoot(routes)],
// 	exports: [RouterModule],
// })
// export class AppRoutingModule { }

// export const routingComponents = [HomeComponent,
// 	NotFoundComponent,
// 	UserNotFoundComponent,
// 	MicrosoftLoginComponent,
// 	ForbiddenComponent,
// 	LoginComponent,
// 	CodeGenerateComponent,
// 	CodeActivateComponent,
// 	UserLoginComponent,
// 	PinResetComponent,
// 	PinUpdateComponent,
// 	LoadComponent,
// 	ProfileComponent,
// 	LogoutComponent,
// 	SearchComponent];
