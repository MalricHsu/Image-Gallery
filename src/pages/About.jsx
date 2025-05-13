import React from "react";

const About = () => {
  return (
    <div>
      <div
        style={{
          height: "80px",
        }}
      ></div>
      <h1 style={{ textAlign: "center" }}>About ME</h1>
      <div
        style={{
          height: "50px",
        }}
      ></div>
      <p
        style={{
          textAlign: "left",
          maxWidth: "650px",
          margin: "0 auto",
          lineHeight: "2",
          textIndent: "2em",
        }}
      >
        歡迎來到我的圖片資料庫介面！這是一個使用 React
        製作的簡單應用程式，讓您可以輕鬆瀏覽、管理與搜尋圖片。
      </p>
      <p
        style={{
          textAlign: "left",
          maxWidth: "650px",
          margin: "0 auto",
          lineHeight: "2",
          textIndent: "2em",
        }}
      >
        系統整合了 <strong>Pexels</strong> 提供的開放 API，圖片來源均來自 Pexels
        的高品質圖庫，非常適合用於設計、靈感收集或作品展示。
        介面設計以簡潔易用為主，讓使用者能快速找到所需圖片，並享受流暢的瀏覽體驗。
      </p>
      <div
        style={{
          height: "40px",
        }}
      ></div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <p>圖片來源：</p>
        <a href="https://www.pexels.com" target="_blank">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Pexels_logo_%282024%29.png"
            alt="Pexels Logo"
            style={{ width: "120px", height: "auto" }}
          />
        </a>
        <div
          style={{
            height: "10px",
          }}
        ></div>
        <div
          style={{
            padding: "50px 0",
            textAlign: "center",
            backgroundColor: "#f0f0f0",
          }}
        >
          <h2>探索更多功能</h2>
          <p
            style={{
              marginTop: "10px",
            }}
          >
            這裡將會展示更多有趣的功能，讓您更方便地使用圖片資料庫。
          </p>
          <p>敬請期待更多更新與功能！</p>
        </div>
      </div>
    </div>
  );
};

export default About;
