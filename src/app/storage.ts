import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { Identity, Community, Gateway, Message, Profile } from './framework/types';

/** Persistent storage service. */
@Injectable()
export class AppDatabase extends Dexie {

	identities: Dexie.Table<Identity, string>;
	communities: Dexie.Table<Community, string>;
	gateway: Dexie.Table<Gateway, string>;

	constructor() {
		super('ume');

		const db = this;

		db.version(1).stores({
			identities: '++id, label',
			communities: '++id, name, icon, description',
			gateway: 'name, url',
		});

		db.identities.mapToClass(Identity);
		db.communities.mapToClass(Community);
		db.gateway.mapToClass(Gateway);

		// this.version(1).stores({
		// 	identities: '++id, first, last',
		// 	communities: '++id, contactId, type, email',
		// 	gateway: '++id, contactId, type, phone',
		// });

	}

}
