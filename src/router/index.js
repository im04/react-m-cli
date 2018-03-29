import React, {Component} from 'react';
import { Route } from 'react-keeper';
import routeConfig from './router.config';
import App from '../components/app';
export default class MyRoute extends Component {
	initRoute = (routeConfig) => {
		return routeConfig.map((v, i) => {
			if (v.children && v.children.length) {
				return this.initRoute(v.children);
			} else {
				if (typeof v.component === 'function') {
					console.log(this);
					return (<Route index={v.isIndex} path={v.path} loadComponent={v.component} key={i}/>);
				} else {
					return (<Route index={v.isIndex} path={v.path} component={v.component} key={i}/>);
				}
			}
		});
	};
	render() {
		return (
			<Route path='/' component={App}>
				{this.initRoute(routeConfig)}
			</Route>
		);
	}
}
