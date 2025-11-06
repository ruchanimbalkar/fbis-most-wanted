import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  const [wantedData, setWantedData] = useState([]);
  let url = "https://api.fbi.gov/wanted/v1/list";

  const getWantedData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.error(`Response status: ${response.status}`);
        return;
      }
      const data = await response.json();
      console.log("data : ", data.items);
      setWantedData(data.items);
    } catch (error) {
      console.error("Error Fetching API : ", error.message);
    }
  };

  //useEffect to fetch data by making an API call for Countries
  useEffect(() => {
    getWantedData();
  }, []);

  return (
    <>
      <div></div>
      <h1>FBI 's Most Wanted</h1>
      {wantedData.map((item, index) => (
        <Card info={item} key={"person_" + index} />
      ))}
    </>
  );
}

export default App;
