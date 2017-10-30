import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Router, RouterModule, NavigationStart, ActivatedRoute, PRIMARY_OUTLET, Params } from '@angular/router';
import 'rxjs/add/operator/filter';
import { ApplicationState } from '../application-state';

interface ICrumb {
	url: string;
	name: string;
	last: boolean;
}

@Component({
	selector: '[app-toolbar]',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {
	public version: string;
	public module: string;
	public moduleName; string;
	public child: string;
	public childName: string;
	public show: boolean;
	public crumbs: ICrumb[];
	public showSearch = false;
	private subscription: any;

	constructor(public appState: ApplicationState, public router: Router, public route: ActivatedRoute, public location: Location) {
		const self = this;

		// this.subscription = router.events
		// 	.filter(event => event instanceof NavigationStart)
		// 	.subscribe((event: NavigationStart) => {

		// 		// const root: ActivatedRoute = this.route.root;
		// 		// console.log(root);
		// 		this.crumbs = this.generateCrumbs(event);
		// 		console.log(this.crumbs);

		// 	});
	}

	public onGoBack() {
		this.router.navigate([this.appState.backUrl]);
		// this.location.back();
	}

	public onNavigateBack() {
		const previousCrumb = this.crumbs[this.crumbs.length - 2];

		if (previousCrumb) {
			this.router.navigateByUrl(previousCrumb.url);
		} else {
			this.router.navigateByUrl('/');
		}
	}

	public onSearch() {
		this.showSearch = !this.showSearch;
	}

	// private generateCrumbs(event: NavigationStart): ICrumb[] {

	// 	// We're on the root, hide.
	// 	if (event.url.length === 1) {
	// 		this.show = false;
	// 	} else {
	// 		this.show = true;

	// 		const fragments = event.url.split('/');
	// 		const lastFragment = fragments[fragments.length - 1];
	// 		const urls = [];

	// 		for (const fragment of fragments) {
	// 			if (fragment === '') {
	// 				continue;
	// 			}

	// 			const url = fragment;
	// 			const name = url.substring(0, 1).toUpperCase() + url.substring(1);

	// 			urls.push({ name: name, url: url, last: (lastFragment === url) });
	// 		}

	// 		return urls;
	// 	}
	// }

	ngOnInit() {
		this.version = (<any> window).ume.version;
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
