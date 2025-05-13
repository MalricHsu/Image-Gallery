import React from "react";

const Page404 = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>很抱歉，您造訪的頁面不存在。</p>
      <a href="/" style={styles.link}>
        回到首頁
      </a>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "100px 20px",
    backgroundColor: "#f8f8f8",
    minHeight: "85vh",
  },
  title: {
    fontSize: "80px",
    margin: "0",
    color: "#555",
  },
  message: {
    fontSize: "20px",
    marginTop: "20px",
    color: "#777",
  },
  link: {
    marginTop: "30px",
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#d2b48c",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    fontWeight: "500",
    fontSize: "20px",
  },
};

export default Page404;
