import React from "react";

// import Card from "/src/js/component/Card.jsx";

const SingleItemLayout = ({ children, img }) => {
    return <div>
        <h3>SingleItemLayout</h3>
        <img src={img} alt="" />
        {children}    
    </div>;
  };

  export default SingleItemLayout;

