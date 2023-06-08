import React from "react";
import "./featured.css";
import useFetch from "../hooks/useFetch";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/api/hotels/countByCity?cities=berlin,madrid,seraidi"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/600x600/653231.jpg?k=526fe3dd8fc78cbaccaee3be9e675b624e73b666ab757ecb0ebf31c7f7d96264&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Berlin</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/600x600/654659.jpg?k=9c4ac59d35869485631346dc1ee16d28e82ec5f79654bf56b4b4eaeef3388299&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Madrid</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://topdestinationsalgerie.com/wp-content/uploads/2021/04/Se%CC%81rai%CC%88di-et-les-monts-de-lEdough-comme-vous-ne-lu2019avez-jamais-vue-PHOTOS-1-1-768x498.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Seraidi</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
