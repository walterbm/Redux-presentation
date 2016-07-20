import React from 'react';

import NavBar from './navigation/NavBar';
import HeaderLogo from './HeaderLogo';
import { HeaderButtons } from './HeaderButtons';

import config from '../../../config/config';
const headerConfig = config.header;
const navbarConfig = config.navbar;

/**
 * The nav header wrapper component
 * @type {*|Function}
 *
 * @return {JSX} jsx
 */
export const Header = () => (
	<nav className="navbar navbar-inverse" role="navigation" style={{marginBottom: 0}}>
		<div className="navbar-header">
			<HeaderLogo {...headerConfig} />
		</div>

		<HeaderButtons {...headerConfig} />

		<div className="navbar-collapse collapse navbar-responsive-collapse" role="navigation">
			<NavBar />
		</div>
	</nav>
);
