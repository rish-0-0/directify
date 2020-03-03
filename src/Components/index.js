import React from 'react';
import { connect } from 'react-redux';

import Node from './Node';
import './index.css';

function App(props) {
	return (
		<div className="container-fluid">
			<div className="container text-center">
				<h1>Directify</h1>
			</div>
			<div className="container main-app-container">
				<Node folderName={props.graph["0"].folderName} id="root-node">
				</Node>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	const { graph } = state;
	return {
		graph,
	};
};

export default connect(mapStateToProps)(App);
