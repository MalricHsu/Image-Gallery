import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";
import axios from "axios";
import Title from "../components/Title";

const Homepage = () => {
  let [data, setData] = useState(null);
  let [input, setInput] = useState("");
  let [page, setPage] = useState(1);
  let [currentSearch, setCurrentSearch] = useState("");
  const auth = process.env.REACT_APP_API_KEY;
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const searchURL = `https://api.pexels.com/v1/search?query=${input}e&per_page=1&per_page=15`;
  const search = async (url) => {
    let result = await axios.get(url, {
      headers: { authorization: auth },
    });
    console.log(result);
    setData(result.data.photos);
    setCurrentSearch(input);
  };

  const morePicture = async () => {
    let newURL;
    setPage(page + 1);
    if (currentSearch === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=${
        page + 1
      }&per_page=15`;
    }
    let result = await axios.get(newURL, {
      headers: { authorization: auth },
    });
    console.log(result);
    setData(data.concat(result.data.photos));
  };

  useEffect(() => {
    search(initialURL);
  }, []);
  return (
    <div style={{ minHeight: "100vh" }}>
      <Title />
      <Search
        search={() => {
          search(searchURL);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
      <div className="morePicture">
        <button onClick={morePicture}>More</button>
      </div>
    </div>
  );
};

export default Homepage;
