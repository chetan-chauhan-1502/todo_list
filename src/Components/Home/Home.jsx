import { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  let [activity, setAcctivity] = useState("");
  let [list, setList] = useState([]);

  // Load list from local storage on component mount
  useEffect(() => {
    const storedList = localStorage.getItem("activityList");
    if (storedList) {
      setList(JSON.parse(storedList));
    }
  }, []);

  // Update local storage whenever list changes
  useEffect(() => {
    localStorage.setItem("activityList", JSON.stringify(list));
  }, [list]);

  let ADD = () => {
    if (activity.trim() !== "") {
      setList([...list, activity]);
      setAcctivity("");
    }
  };

  let REMOVE = (id) => {
    let rmv = list.filter((item, index) => index !== id);
    setList(rmv);
  };

  return (
    <>
      <div className="main">
        <div className="main1">
          <input
            type="text"
            placeholder="enter text here.."
            name="activity"
            value={activity}
            onChange={(e) => setAcctivity(e.target.value)}
          />
          <button onClick={ADD}>ADD</button>
        </div>

        {list.map((demo, id) => {
          return (
            <div className="mainDetail" key={id}>
              <h2>{demo}</h2>
              <button onClick={() => REMOVE(id)}>REMOVE</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
