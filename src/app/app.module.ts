import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrameworkModule } from './framework';
import { AppComponent } from './app.component';
import { HomeComponent } from './controllers/home/home.component';
import { AppRoutingModule, routingComponents } from './app.routing';
import { IntroductionComponent } from './controllers/introduction/introduction.component';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppDatabase } from './storage';
import { GatewayDialogComponent } from './controllers/gateway-dialog/gateway-dialog.component';

@NgModule({
	declarations: [
		AppComponent,
		GatewayDialogComponent,
		routingComponents
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpModule,
		FrameworkModule,
		AppRoutingModule,
		ReactiveFormsModule
	],
	entryComponents: [
		GatewayDialogComponent
	],
	providers: [{ provide: APP_BASE_HREF, useValue: '/' }, AppDatabase],
	bootstrap: [AppComponent]
})
export class AppModule { }
