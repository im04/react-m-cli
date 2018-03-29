'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-keeper';
import {useStrict} from 'mobx';
import { Provider } from 'mobx-react';
import MRouter from './router';
import stores from './stores';
window._____APP_STATE_____ = stores;
useStrict(true);
ReactDOM.render((
	<HashRouter>
		<Provider {...stores}>
			<MRouter/>
		</Provider>
	</HashRouter>
), document.getElementById('root'));
