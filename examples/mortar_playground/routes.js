import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MortarJS from 'mortarjs'
/**
 * Components
 *
 * @type {exports}
 */
import { App } from './components/global/app/App'

/**
 * CMS Pages
 *
 * @type {exports}
 */
import Dashboard from './pages/dashboard/Dashboard';

// // Form Components
// var DropdownSelect = require('./pages/components/form/DropdownSelect/DropdownSelect');
// import { Input }          from './pages/components/form/Input/Input';
// var Toggle         = require('./pages/components/form/Toggle/Toggle');
// var TypeAheadInput = require('./pages/components/form/TypeAheadInput/TypeAheadInput');
// var RadioButtons   = require('./pages/components/form/RadioButtons/RadioButtons');
// var Checkbox       = require('./pages/components/form/Checkbox/Checkbox');
// var FileInput      = require('./pages/components/form/FileInput/FileInput');
// var TextArea       = require('./pages/components/form/TextArea/TextArea');
//
// // Visualization Components
// var Table          = require('./pages/components/visualization/Table/Table');
//
// // Global Components
// var Tooltip        = require('./pages/components/global/Tooltip/Tooltip');
// var ButtonDrawer   = require('./pages/components/global/ButtonDrawer/ButtonDrawer');
// var ModalContainer = require('./pages/components/global/ModalContainer/ModalContainer');

/**
 * Routing
 *
 * This configuration doesn't necessarily map to routes, but to how the layout is presented by the router
 *
 * @type {JSX}
 * @TODO: top-level pages with no content should default to the first view
 * @TODO: build all these pages
 */
var Routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Dashboard} />

		<Route path="components/">
		</Route>

		<Route path="*" component={Dashboard} />
	</Route>
);

module.exports = Routes;
