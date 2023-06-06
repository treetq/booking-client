import React from "react";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/653231.jpg?k=526fe3dd8fc78cbaccaee3be9e675b624e73b666ab757ecb0ebf31c7f7d96264&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Montreal</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/654659.jpg?k=9c4ac59d35869485631346dc1ee16d28e82ec5f79654bf56b4b4eaeef3388299&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Istanbul</h1>
          <h2>532 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/968315.jpg?k=14d0bad185930ec2663562b999ecf498fb6fcf492c16a4c33228504a15e2d119&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Barcelona</h1>
          <h2>533 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
