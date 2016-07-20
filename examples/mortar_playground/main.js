/**
 * Packages
 * @type {exports}
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

/**
 * Pull in application routes
 *
 * @type {Routes|exports}
 */
import Routes from './routes';

// Attach react router
window.__app_container = document.getElementById('root');

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

ReactDOM.render((
	<div>
		<Router history={appHistory} routes={Routes} />
		<footer>Made by <a href="http://fuzzproductions.com">Fuzz Productions</a></footer>
	</div>
), window.__app_container)

// /**
//  * Pull in index.html!
//  *
//  * @type {exports}
//  */
// require('./index.html');

/**
 * Pull in css/scss/js file assets
 *
 * @type {exports}
 */
require('./assets');

/**
 * Pull in image assets
 *
 * @type {exports}
 */
require('./public/favicon.ico');
