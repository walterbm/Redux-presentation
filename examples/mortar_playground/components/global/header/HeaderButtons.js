import React from 'react';
import { HeaderButton } from './HeaderButton';

export const HeaderButtons = () => (
		<ul className="nav navbar-nav navbar-right">
			{
				this.props.buttons.map(function(button, index) {
					return <HeaderButton key={index} {...button} />;
				})
			}
		</ul>
)
