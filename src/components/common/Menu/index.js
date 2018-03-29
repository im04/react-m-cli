import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {Menu, Icon, notification} from 'antd';
import config from './menuConfig';
const {SubMenu} = Menu;
@inject('CommonStore')
@observer
export default class Home extends Component {
	initManu = config => {
		return config.map((v, i) => {
			if (v.children && v.children.length) {
				return (
					<SubMenu key={v.name} title={<span>{v.icon && <Icon type={v.icon}/>}<span>{v.name}</span></span>}>
						{this.initManu(v.children)}
					</SubMenu>
				);
			} else {
				return (
					<Menu.Item key={v.name}>
						{v.icon && <Icon type={v.icon} />}
						<span>{v.name}</span>
					</Menu.Item>
				);
			}
		});
	};
	nativeTo = manuItemKey => {
		notification.open({
			message: manuItemKey.keyPath.toString()
		});
	};
	render() {
		console.log(this.props.CommonStore.theme);
		return (<Menu onClick={this.nativeTo} theme={this.props.CommonStore.theme} mode="inline" defaultSelectedKeys={['4']}>
			{this.initManu(config)}
		</Menu>);
	}
}
