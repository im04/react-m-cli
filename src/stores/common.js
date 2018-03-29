import {observable} from 'mobx';
class CommonStore {
	@observable theme = 'dark';
}
export default new CommonStore();
