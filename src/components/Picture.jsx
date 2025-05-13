import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <h2 style={{ textAlign: "center", color: "gray" }}>
        {" "}
        {data.photographer}
      </h2>
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>
      <p style={{ textAlign: "center" }}>
        下載圖片：
        <a
          target="_blank"
          href={data.src.large}
          rel="noreferrer"
          style={{ textAlign: "center" }}
        >
          請點我一下
        </a>
      </p>
    </div>
  );
};

export default Picture;
