import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterModule, NavigationStart, ActivatedRoute, PRIMARY_OUTLET, Params } from '@angular/router';
import 'rxjs/add/operator/filter';

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

	constructor(public router: Router, public route: ActivatedRoute) {
		const self = this;

		this.subscription = router.events
			.filter(event => event instanceof NavigationStart)
			.subscribe((event: NavigationStart) => {

				// const root: ActivatedRoute = this.route.root;
				// console.log(root);
				this.crumbs = this.generateCrumbs(event);
				console.log(this.crumbs);

			});
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
