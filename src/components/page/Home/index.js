import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import style from './home.css';
import { Layout } from 'antd';
import Menu from '@CC/Menu';
const { Header, Content, Footer, Sider } = Layout;
@inject('HomeStore')
@observer
export default class Home extends Component {
	render() {
		return (
			<div className="home">
				<Layout>
					<Sider className={style.sider}>
						<div className={style.logo}>logo</div>
						<Menu/>
					</Sider>
					<Layout className={style.layout}>
						<Header className={style.header}>头部</Header>
						<Content className={style.content}>
							<div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
								...
								<br />
								Really
								<br />asdfsadf<br />...<br />...<br />
								long
								<br />..sadfa.<br />...<br />...<br />...<br />...<br />...
								<br />.asdfasdf..<br />...<br />...<br />...<br />...<br />...
								<br />.asdfs..<br />...asdf<br />...<br />...<br />...<br />...
								<br />.sdfsdf.<br />...<br />...<br />...<br />...<br />...
								<br />..asdfsadf.<br />...<br />...<br />...<br />...<br />...
								<br />..asdfas.<br />...<br />...<br />...<br />...<br />...
								<br />..dfasdfasf.<br />...<br />...<br />...<br />...<br />
								content
							</div>
						</Content>
						<Footer className={style.footer}>
							Ant Design ©2016 Created by Ant UED
						</Footer>
					</Layout>
				</Layout>
			</div>
		);
	}
}
