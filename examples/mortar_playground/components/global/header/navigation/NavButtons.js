module.exports = function (navbarConfig) {
	var React = require('react');
	var NavButton = require('./NavButton');

	return React.createClass({
		buttons: function () {
			return navbarConfig.map(function (button, index) {
					return (
						<NavButton key={index} button={button} />
					)
			});
		},

		render:  function () {
			return (
				<ul className="nav navbar-nav">
				{this.buttons()}
				</ul>
			)
		}
	});
};
