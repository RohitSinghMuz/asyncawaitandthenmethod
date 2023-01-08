import React, { useEffect, useState } from "react";
const Asyncawaitmethod = () => {
  const [data, setdata] = useState([]);

  const fetchdata = async () => {
    try {
      const getResponse = await fetch("https://fakestoreapi.com/products");
      const getResponseData = await getResponse.json();
      setdata(getResponseData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, [data]);
  console.log(data);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {data?.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
              }}
            >
              <div
                style={{
                  border: "1px solid black",
                  margin: "1em",
                  width: "280px",
                  height: "430px",
                  textAlign: "center",
                }}
              >
                <img
                  src={item.image}
                  width="160px"
                  height="160px"
                  alt="ecommereimage"
                />
                <h4>{item.category}</h4>
                <h4>{item.title}</h4>
                <h4>${item.price}</h4>
                <h5>Rate {item.rating.rate}</h5>
                <button
                  style={{ padding: "10px 20px", backgroundColor: "gren" }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Asyncawaitmethod;
