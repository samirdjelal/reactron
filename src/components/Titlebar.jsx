import React, {Component} from 'react';

class Titlebar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			maximized: false
		}
		this.handleMinimize = this.handleMinimize.bind(this);
		this.handleMaximize = this.handleMaximize.bind(this);
		this.handleClose = this.handleClose.bind(this);
		
		
	}
	
	render() {
		return (
			<div className="Titlebar">
				<div className="Icon"/>
				<div className="Title">Reactron App</div>
				<div className="Controls">
					<div className="Item Minimize" onClick={this.handleMinimize}>-</div>
					<div className="Item Maximize" onClick={this.handleMaximize}>O</div>
					<div className="Item Close" onClick={this.handleClose}>X</div>
				
				
				</div>
			</div>
		);
	}
	
	
	// ipcRenderer
	
	handleMinimize() {
		window.remote.getCurrentWindow().minimize();
	}
	
	handleMaximize() {
		if (this.state.maximized === false) {
			this.setState((prevState) => ({maximized: !prevState.maximized}));
			window.remote.getCurrentWindow().maximize();
		} else {
			this.setState((prevState) => ({maximized: !prevState.maximized}));
			window.remote.getCurrentWindow().unmaximize();
		}
		// console.log(window.remote.getCurrentWindow().isMaximized());
		// if (window.remote.getCurrentWindow().isMaximized()) {
		// 	console.log('unmaximize');
		// 	window.remote.getCurrentWindow().unmaximize();
		// } else {
		// 	console.log('maximize');
		// 	window.remote.getCurrentWindow().maximize();
		// }
	}
	
	handleClose() {
		window.remote.getCurrentWindow().close();
	}
	
}

export default Titlebar;
