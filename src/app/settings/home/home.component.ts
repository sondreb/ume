import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { GatewayDialogComponent } from '../gateway-dialog/gateway-dialog.component';
import { Gateway } from '../gateway';
import { ApplicationState } from '../../framework';
import { LocalStorageService } from '../../framework';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

	public quota: string | any;
	public usage: string | any;
	public storageUsed: number;
	private interval: any;
	public gateways: Array<any>;

	constructor(public dialog: MatDialog, public appState: ApplicationState, public storage: LocalStorageService) {

	}

	ngOnInit() {
		// Calculate storage every 10 seconds.
		this.interval = setInterval(() => {
			this.updateUsedSpace();
		}, 10000);

		// Trigger an initial check.
		setTimeout(() => {
			this.updateUsedSpace();
		});

		this.gateways = this.storage.get('gateways');

		if (!this.gateways) {
			this.gateways = [{name: 'localhost', url: 'http://localhost:8081'}];
		}
	}

	public ngOnDestroy() {
		clearInterval(this.interval);
	}

	public onGatewayAdd() {
		const gateway = new Gateway();

		const dialogConfig = new MatDialogConfig();
		dialogConfig.data = gateway;
		// dialogConfig.width = '250px';
		// dialogConfig.position = { top: '60px', left: '0' };

		const dialogRef = this.dialog.open(GatewayDialogComponent, dialogConfig);

		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				// Save the gateway.
				console.log(gateway);

				this.gateways.push(gateway);
				this.persistGateways();

				// let gateways = this.storage.get('gateways');

				// if (!gateways) {
				// 	gateways = [];
				// }

				// gateways.push(gateway);
			}
		});
	}

	public onGatewayDelete(gateway) {
		const index = this.gateways.indexOf(gateway);
		this.gateways.splice(index, 1);
		this.persistGateways();
	}

	private persistGateways() {
		this.storage.set('gateways', this.gateways);
	}

	private updateUsedSpace() {
		const self = this;
		const nav = (<any> window.navigator);

		if (nav.storage) {
			nav.storage.estimate().then((data) => {
				self.quota = (data.quota / 1024 / 1024).toFixed(2);
				self.usage = (data.usage / 1024 / 1024).toFixed(2);

				self.storageUsed = self.usage / self.quota * 100;

				console.log(self.storageUsed);
			});
		}
	}
}
