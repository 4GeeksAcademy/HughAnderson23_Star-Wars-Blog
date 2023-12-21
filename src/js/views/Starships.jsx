import React from "react";

import SingleItemLayout from "../component/SingleItemLayout.jsx";
import {useParams} from "react-router";
// import Card from "/src/js/component/Card.jsx";

const Starships = () => {
  const {id} = useParams();
    return <div>
      <section className="container mt-3">
       <h1>Starships</h1>  
        <SingleItemLayout img={"https://placekitten.com/750"}>
          <code>{id}</code>
        </SingleItemLayout>
      </section>
    </div>;
  };

  export default Starships;