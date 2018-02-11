import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterModule, NavigationStart, ActivatedRoute, PRIMARY_OUTLET, Params, RouterState } from '@angular/router';
import 'rxjs/add/operator/filter';
import { ApplicationState } from '../application-state';

interface ICrumb {
	url: string;
	name: string;
	last: boolean;
}

@Component({
	selector: 'app-breadcrumb',
	templateUrl: './breadcrumb.component.html',
	styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, OnDestroy {

	public version: string;
	public module: string;
	public moduleName; string;
	public child: string;
	public childName: string;
	public show: boolean;
	public crumbs: ICrumb[];

	private subscription: any;

	constructor(public router: Router,
		public route: ActivatedRoute,
		public appState: ApplicationState
	) {
		const self = this;

		this.subscription = router.events
			.filter(event => event instanceof NavigationStart)
			.subscribe((event: NavigationStart) => {

				// Whenever we navigate on mobile device, we'll hide the sidenav.
				if (this.appState.ismobile && this.appState.sidenav) {
					this.appState.sidenav = false;
				}

				// Reset icon on navigation change.
				this.appState.icon = null;

				// const currentRoute = this.getRoute(event.url);

				// if (currentRoute.route && currentRoute.route.data) {
				// 	const breadcrumb = currentRoute.route.data['breadcrumb'];
				// 	this.appState.title = breadcrumb;

				// 	if (currentRoute.parent) {
				// 		this.appState.backUrl = currentRoute.parent.path;
				// 	} else {
				// 		this.appState.backUrl = '/';
				// 	}
				// 	// this.appState.backUrl = currentRoute.
				// 	console.log(breadcrumb);
				// } else {
				// 	this.appState.title = null;
				// }

				// console.log(this.router.routerState.root);
				// console.log(this.router.routerState.root.firstChild);
				// console.log(this.router.routerState.root.firstChild && this.router.routerState.root.firstChild.firstChild);

				// const root: ActivatedRoute = this.route.root;
				// console.log(root);
				this.crumbs = this.generateCrumbs(event);

			});
	}

	public getRoute(url: string) {
		debugger;
		const segments = url.split('/').filter(String);

		let children: any = this.router.config;
		let route: any;
		let parent: any;

		for (let i = 0; i < segments.length; i++) {
			const segment = segments[i];
			const config = children.find(c => c.path === segment);

			if (config) {
				route = config;
			}

			if ((i < segments.length - 1) && config) {
				children = config.children;
				parent = config;
			}
		}

		return {
			route: route,
			parent: parent
		};
	}

	public onNavigateBack() {
		debugger;
		// const previousCrumb = this.crumbs[this.crumbs.length - 2];

		// if (previousCrumb) {
		// 	this.router.navigateByUrl(previousCrumb.url);
		// } else {
		this.router.navigateByUrl('../');
		// }
	}

	private generateCrumbs(event: NavigationStart): ICrumb[] {

		// We're on the root, hide.
		if (event.url.length === 1) {
			this.show = false;
		} else {
			this.show = true;

			const fragments = event.url.split('/');
			const lastFragment = fragments[fragments.length - 1];
			const urls = [];

			for (const fragment of fragments) {
				if (fragment === '') {
					continue;
				}

				const url = fragment;
				const name = url.substring(0, 1).toUpperCase() + url.substring(1);

				urls.push({ name: name, url: url, last: (lastFragment === url) });
			}

			return urls;
		}
	}

	ngOnInit() {
		this.version = (<any> window).ume.version;
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
