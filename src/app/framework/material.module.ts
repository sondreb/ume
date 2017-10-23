import { NgModule } from '@angular/core';

import {
	MatAutocompleteModule,
	MatButtonModule,
	MatButtonToggleModule,
	MatCardModule,
	MatCheckboxModule,
	MatChipsModule,
	MatCommonModule,
	MatDatepickerModule,
	MatDialogModule,
	MatExpansionModule,
	MatFormFieldModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule,
	MatLineModule,
	MatListModule,
	MatMenuModule,
	MatNativeDateModule,
	MatOptionModule,
	MatPaginatorModule,
	MatProgressBarModule,
	MatSortModule,
	MatTabsModule,
	MatProgressSpinnerModule,
	MatPseudoCheckboxModule,
	MatRadioModule,
	MatRippleModule,
	MatSelectModule,
	MatSidenavModule,
	MatSliderModule,
	MatSlideToggleModule,
	MatSnackBarModule,
	MatStepperModule,
	MatTableModule,
	MatToolbarModule,
	MatTooltipModule,
	CompatibilityModule,
	NativeDateAdapter,
	DateAdapter,
	MAT_DATE_FORMATS,
	MAT_DATE_LOCALE,
} from '@angular/material';

export const materialModules = [
	MatAutocompleteModule,
	MatButtonModule,
	MatButtonToggleModule,
	MatCardModule,
	MatCheckboxModule,
	MatChipsModule,
	MatCommonModule,
	MatDatepickerModule,
	MatDialogModule,
	MatExpansionModule,
	MatFormFieldModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule,
	MatLineModule,
	MatListModule,
	MatMenuModule,
	MatNativeDateModule,
	MatOptionModule,
	MatPaginatorModule,
	MatProgressBarModule,
	MatSortModule,
	MatTabsModule,
	MatProgressSpinnerModule,
	MatPseudoCheckboxModule,
	MatRadioModule,
	MatRippleModule,
	MatSelectModule,
	MatSidenavModule,
	MatSliderModule,
	MatSlideToggleModule,
	MatSnackBarModule,
	MatStepperModule,
	MatTableModule,
	MatToolbarModule,
	MatTooltipModule,
	CompatibilityModule,
];

@NgModule({
	imports: [...materialModules],
	exports: [...materialModules]
})
export class MaterialModule {

}