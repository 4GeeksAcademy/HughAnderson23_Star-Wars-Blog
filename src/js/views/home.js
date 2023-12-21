import React, {useContext, useEffect, useState} from "react";
import "../../styles/home.css";

import { Context } from "/src/js/store/appContext.js";

import { Card } from "/src/js/component/Card.jsx";
import { Link } from "react-router-dom";

import  { People }  from "/src/js/views/People.jsx";
import { Starships } from "/src/js/views/Starships.jsx";
import { Vehicles } from "/src/js/views/Vehicles.jsx";
// useEffect that runs a get 


// store.people.map((person, id) => )

const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		const pop_data = async () => {
			await actions.getSwapiData("people");
			await actions.getSwapiData("vehicles");
			await actions.getSwapiData("starships");
		};
		pop_data();
	  }, []);
	
	return (
		<>
			<section className="d-flex flex-column gap-3 mt-3 mx-5 align-items-center">
				<div className="d-flex flex-column gap-2">
					<h2>People</h2>
					<div className="d-flex flex-row gap-2 mt2">
						{store.people.map((person, idx) => (
							<Card key={idx}/>
						))}
					</div>
				</div>
				<div className="d-flex flex-column gap-2">
					<h2>Vehicles</h2>
					<div className="d-flex flex-row gap-2 mt2">
						{store.vehicles.map((person, idx) => (
							<Card key={idx}/>
						))}
					</div>
				</div>
				<div className="d-flex flex-column gap-2">
					<h2>Starships</h2>
					<div className="d-flex flex-row gap-2 mt2">
						{store.starships.map((person, idx) => (
							<Card key={idx}/>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export { Home };