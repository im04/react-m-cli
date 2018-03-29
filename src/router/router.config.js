// import Home from '@CP/home';
const Home = (callback) => {
	return import(/* webpackChunkName: "home" */ '@CP/home').then(component => {
		callback(component.default);
	});
};
export default [
	{
		path: '/home',
		component: Home,
		isIndex: true
	}
];
