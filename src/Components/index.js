import React from 'react';

import Node from './Node';
import './index.css';

function App() {
	return (
		<div className="container-fluid">
			<div className="container text-center">
				<h1>Directify</h1>
			</div>
			<div className="container main-app-container">
				<Node folderName="root" id="root-node">
					
				</Node>
			</div>
		</div>
	);
}

export default App;
