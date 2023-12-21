import React from "react";

import SingleItemLayout from "../component/SingleItemLayout.jsx";
import {useParams} from "react-router";
// import Card from "/src/js/component/Card.jsx";

const Vehicles = () => {
  const {id} = useParams();
    return <div>
      <section className="container mt-3">
       <h1>Vehicles</h1>  
        <SingleItemLayout img={"https://placekitten.com/750"}>
          <code>{id}</code>
        </SingleItemLayout>
      </section>
    </div>;
  };

  export default Vehicles;