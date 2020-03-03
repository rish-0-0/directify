import React from 'react';
import { connect } from 'react-redux';

import Node from './Node/index';
import './index.css';

function App(props) {
	return (
		<div className="container-fluid">
			<div className="container text-center">
				<h1><code>Directoryfy</code></h1>
			</div>
			<div className="container main-app-container">
				<Node folderName={props.tree.root.value} id="root-node">
				</Node>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	const { mainTree } = state.tree;
	return {
		tree: mainTree
	};
};

export default connect(mapStateToProps)(App);
