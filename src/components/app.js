import React, {Component} from 'react';
import { observer } from 'mobx-react';
@observer
export default class App extends Component {
	render() {
		return (
			<div className="app">
				{this.props.children}
			</div>
		);
	}
}
