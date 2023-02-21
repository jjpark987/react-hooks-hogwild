import React from "react";
import Nav from "./Nav";
import FilterSortForm from "./FilterSortForm";

import hogs from "../porkers_data";

console.log(hogs)

function App() {
	return (
		<div className="App">
			<Nav />
			<FilterSortForm hogs={hogs}/>
		</div>
	);
}

export default App;
