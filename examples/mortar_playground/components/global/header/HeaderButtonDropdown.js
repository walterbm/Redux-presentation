import React from 'react';
import { HeaderButtonDropDownItem } from './HeaderButtonDropdownItem';

export const HeaderButtonDropdown = () => (
	<ul className="dropdown-menu dropdown-user">
		{
			this.props.items.map(function (item, index) {
				return <HeaderButtonDropDownItem key={index} {...item} />;
			})
		}
	</ul>
)
