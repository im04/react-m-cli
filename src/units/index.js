import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import commonStore from '../stores/common';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'https://conduit.productionready.io/api';
/**
 *  全局请求异常拦截器
 * @param err 错误信息
 * @returns {*}
 */
const handleErrors = err => {
	if (err && err.response && err.response.status === 401) {
		console.log(err);
	}
	return err;
};
/**
 *  全局请求响应拦截器
 * @param res 响应的信息
 * @returns {string | ReadableStream | HTMLElement | any}
 */
const responseBody = res => res.body;
/**
 *  token中间件
 * @param req 请求信息
 */
const tokenPlugin = req => {
	if (commonStore.token) {
		req.set('token', `${commonStore.token}`);
	}
};

export const requests = {
	delete: url =>
		superagent
			.del(`${API_ROOT}${url}`)
			.use(tokenPlugin)
			.end(handleErrors)
			.then(responseBody),
	get: url =>
		superagent
			.get(`${API_ROOT}${url}`)
			.use(tokenPlugin)
			.end(handleErrors)
			.then(responseBody),
	put: (url, body) =>
		superagent
			.put(`${API_ROOT}${url}`, body)
			.use(tokenPlugin)
			.end(handleErrors)
			.then(responseBody),
	post: (url, body) =>
		superagent
			.post(`${API_ROOT}${url}`, body)
			.use(tokenPlugin)
			.end(handleErrors)
			.then(responseBody)
};
