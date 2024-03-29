import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {inc, dec} from '../store/appReducer';
import {withRouter} from "react-router";

class Home extends Component {
	
	render() {
		return (
			<Fragment>
				<h2>{this.props.app_name}</h2>
				<code>Redux State `val`= {this.props.val}</code>
				<br/><br/>
				<button onClick={() => this.props.inc(2)}>Increment</button>
				<button onClick={() => this.props.dec(2)}>Decrement</button>
				<button onClick={() => setTimeout(()=>this.props.inc(2), 2000)}>Async Increment</button>
				<br/>
			</Fragment>
		);
	}
}

export default withRouter(connect(
	state => ({
		val: state.app.val,
		app_name: state.app.name,
		app_version: state.app.version
	}),
	{inc, dec}
)(Home));
