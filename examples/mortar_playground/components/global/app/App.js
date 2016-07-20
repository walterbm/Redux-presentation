import React from 'react';
import MortarJS from 'mortarjs';
import { Router } from 'react-router';''

import { Header } from '../header/Header';

/**
 * Wrapper for the CMS application
 *
 * @type {*|exports}
 *
 * @return {JSX} jsx
 */
export const App = () => (
	<div id="wrapper">
		<Header />
		{this.props.children}
	</div>
);
