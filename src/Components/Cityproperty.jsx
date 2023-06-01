import React from "react";
import { arr } from "./api";
import "../Styles/content.css"
const Cityproperty = () => {
  return arr.map((ele) => {
    return (
        <div className="cycles" style={{
            backgroundColor: "white",
            height: "15rem",
            width: "15rem",
            borderRadius: "100%",
            flexShrink:0
          }}>{ele}</div>
        
    );
  });
};

export default Cityproperty;
