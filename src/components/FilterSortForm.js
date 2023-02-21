import React, { useState } from "react";
import RenderHogs from "./RenderHogs";

function FilterSortForm({ hogs }) {
    let filteredArray;
    const [filterGreased, setFilterGreased] = useState(false);
    function handleFilter() {
        setFilterGreased(!filterGreased);
    }
    filterGreased ? filteredArray = hogs.filter(hog => hog.greased) : filteredArray = hogs;
    const [sortBy, setSortBy] = useState("none");
    function handleSortBy(event) {
        setSortBy(event.target.value);
    }
    let sortedArray;
    if(sortBy === "none") {
        sortedArray = filteredArray;
    }
    if(sortBy === "name") {
        sortedArray = filteredArray.sort((a, b) => a.name.localeCompare(b.name));
    }
    if(sortBy === "weight") {
        sortedArray = filteredArray.sort((a, b) => a.weight - b.weight);
    }
    return (
        <div>
            <button onClick={handleFilter}>{filterGreased ? "Filter off" : "Filter greased hogs"}</button>
            <select onChange={handleSortBy}>
                <option value="none">Sort by none</option>
                <option value="name">Sort by name</option>
                <option value="weight">Sort by weight</option>
            </select>
            <br />
            <br />
            {sortedArray.map(hog => 
                <RenderHogs key={hog.name} hog={hog} />    
            )}
        </div>
    )
}

export default FilterSortForm;