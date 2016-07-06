/*
 * Module dependencies
 */

import React from 'react';

import TwityProfileHeaderCard from './../components/TwityProfileHeaderCard/TwityProfileHeaderCard';

export default class PageProfile extends React.Component {	
	render() { 
		return <div className="col-sm-3">
		  <TwityProfileHeaderCard  key={this.props.d.user.id} user={this.props.d.user} />
   	</div>
	}
}

