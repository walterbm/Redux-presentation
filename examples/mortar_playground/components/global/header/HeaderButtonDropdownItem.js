import React from 'react';

export const HeaderButtonDropdownItem = () => (
	<li>
		<a href={this.props.href}>
			<i className={'fa fa-'+this.props.iconName+' fa-fw'}></i>
			{this.props.item}
		</a>
	</li>
)
