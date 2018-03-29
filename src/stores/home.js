import {observable, action} from 'mobx';
class HomeStore {
	@observable test = 1;
	@action pullUser() {
		this.test++;
	}
}
export default new HomeStore();
