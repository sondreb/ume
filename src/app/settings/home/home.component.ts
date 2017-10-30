import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { GatewayDialogComponent } from '../gateway-dialog/gateway-dialog.component';
import { Gateway } from '../gateway';

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

	constructor(public dialog: MatDialog) {

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
			}
		});
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
