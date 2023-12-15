import React from "react";
import Nav from "./Nav";
import Tile from "./Tile";

import hogs from "../porkers_data";

function App() {
	return (
		<div className='ui grid container'>
			<Nav />
			<Tile hogs={hogs}/>
		</div>
	);
}

export default App;
