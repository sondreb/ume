import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat.routing';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat.component';
import { FrameworkModule } from '../framework';
import { CreateChatComponent } from './create/create.component';

@NgModule({
	imports: [
		CommonModule,
		ChatRoutingModule,
		FrameworkModule
	],
	exports: [ChatRoutingModule],
	declarations: [HomeComponent, ChatComponent, CreateChatComponent]
})
export class ChatModule { }
