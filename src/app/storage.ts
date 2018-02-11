import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { Identity, Community, Gateway, Message, Profile } from './framework/types';

/** Persistent storage service. */
@Injectable()
export class AppDatabase extends Dexie {

	// Learn more: http://dexie.org/docs/Tutorial/Understanding-the-basics

	identity: Dexie.Table<Identity, number>;
	community: Dexie.Table<Community, string>;
	gateway: Dexie.Table<Gateway, string>;

	constructor() {
		super('ume');

		const db = this;

		db.version(1).stores({
			identity: 'id',
			community: 'id, name, icon, description'
		});

		db.version(2).stores({
			gateway: 'name, url'
		});

		db.identity.mapToClass(Identity);
		db.community.mapToClass(Community);
		db.gateway.mapToClass(Gateway);

		// this.version(1).stores({
		// 	identities: '++id, first, last',
		// 	communities: '++id, contactId, type, email',
		// 	gateway: '++id, contactId, type, phone',
		// });

	}

}
