import React from 'react';
import { HeaderButtonDropdown } from './HeaderButtonDropdown';

export const HeaderButton = () => (
		<li className="dropdown">
			<a className="dropdown-toggle" data-toggle="dropdown" href="#">
				<i className={'fa fa-'+this.props.iconName+' fa-fw'}></i>  <i className="fa fa-caret-down"></i>
			</a>
			<HeaderButtonDropdown {...this.props.children} />
		</li>
)
