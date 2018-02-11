import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'ume-gateway-dialog',
	templateUrl: 'gateway-dialog.component.html',
})
export class GatewayDialogComponent {

	constructor(
		public dialogRef: MatDialogRef<GatewayDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any) {

		// emailFormControl = new FormControl('', [
		// 	Validators.required,
		// 	Validators.pattern(EMAIL_REGEX)]);

	}
}
