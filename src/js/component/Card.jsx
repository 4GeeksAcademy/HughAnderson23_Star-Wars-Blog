// children title img setFave(onclick button function)
import React, { Children, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

const Card = ({children, title, img, setFav}) => {
  const { actions } = useContext(Context);

//   const [img, setImg] = useState();

//   useEffect(() => {
//     setImg(`https://placekitten.com/${Math.floor(Math.random() * 500) + 250}`);
//   }, []);

  return (
    <>
      <div className="card" style={{ width: "100%" }}>
        <div className="row g-0">
           {img ? (
                <img src={img} className="img-fluid rounded" alt="..." />
           ) : (
            ""
           )}
            <div className="card-body">
              <h5 className="card-title">{title}</h5> 
              {children}
            </div>
          <div className="card-footer d-flex flex-row justify-content-around align-items-center">
            <Link to={""}>Details</Link>
            <button className="btn btn primary" onClick={setFav} >Favorite/Unfavorite</button>  
          </div>
        </div>
      </div>
    </>
  );
};

export { Card };