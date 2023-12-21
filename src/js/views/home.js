import React from "react";
import "../../styles/home.css";

import  { People }  from "/src/js/views/People.jsx";
// import { Starships } from "/src/js/views/Starships.jsx";
// import { Vehicles } from "/src/js/views/Vehicles.jsx";
// useEffect that runs a get 


// store.people.map((person, id) => )

const Home = () => (
	<div className="d-flex flex-column gap-3 ">
		
		<People/>


	</div>
);

export { Home };