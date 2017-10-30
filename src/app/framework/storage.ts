import { Injectable } from '@angular/core';
import { ApplicationState } from './application-state';

@Injectable()
export class StorageService {
	private storage: any;

	constructor(public appState: ApplicationState) {
		if (window.localStorage && appState.persist) {
			this.storage = window.localStorage;
		} else {
			this.storage = {
				items: [],
				getItem: function (key) {
					return this.items[key];
				},
				setItem: function (key, value) {
					this.items[key] = value;
				},
				removeItem: function (key) {
					delete this.items[key];
				}
			};
		}
	}

	public get(key): any {
		const valueString = this.storage.getItem(key);
		let valueObject = null;

		if (valueString != null && valueString !== '') {
			valueObject = JSON.parse(valueString);
		}

		return valueObject;
	}

	public set(key, value) {
		if (value != null && value !== '') {
			const valueString = JSON.stringify(value);
			this.storage.setItem(key, valueString);
		} else if (value === null) {
			// When null value, remove entry from storage.
			this.storage.removeItem(key);
		}
	}
}
