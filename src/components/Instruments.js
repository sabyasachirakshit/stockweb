import React, { useState, useEffect } from "react";

function Instruments() {
  var str = window.location.href;
  var arr = str.split("/");
  var symbol = arr[arr.length - 1];
  var url = "https://prototype.sbulltech.com/api/v2/quotes/";
  url += symbol;
  const [user, setUser] = useState([]);
  const fetchData = () => {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        var o1 = data;
        var o2 = o1.payload;
        if (symbol === "TECHM") {         
            setUser(o2.TECHM);
        } else if (symbol === "TORNTPOWER") {
          setUser(o2.TORNTPOWER);
        } else if (symbol === "IDBI") {
          setUser(o2.IDBI);
        } else if (symbol === "GRASIM") {   
            setUser(o2.GRASIM);         
        } else if (symbol === "BHARATFIN") {
          setUser(o2.BHARATFIN);
        } else if (symbol === "OFSS") {
          setUser(o2.OFSS);
        } else if (symbol === "KAJARIACER") {
          setUser(o2.KAJARIACER);
        } else if (symbol === "INDIGO") {
          setUser(o2.INDIGO);
        } else if (symbol === "ENGINERSIN") {
          setUser(o2.ENGINERSIN);
        } else if (symbol === "SBIN") {
          setUser(o2.SBIN);
        } else if (symbol === "LALPATHLAB") {
          setUser(o2.LALPATHLAB);
        } else if (symbol === "AARTIIND") {
          setUser(o2.AARTIIND);
        } else if (symbol === "IPCALAB") {
          setUser(o2.IPCALAB);
        } else if (symbol === "INDUSTOWER") {
          setUser(o2.INDUSTOWER);
        } else if (symbol === "BIOCON") {
          setUser(o2.BIOCON);
        } else if (symbol === "ADANIPOWER") {
          setUser(o2.ADANIPOWER);
        } else if (symbol === "CENTURYTEX") {
          setUser(o2.CENTURYTEX);
        } else if (symbol === "DIVISLAB") {
          setUser(o2.DIVISLAB);
        } else if (symbol === "INFIBEAM") {
          setUser(o2.INFIBEAM);
        } else if (symbol === "HAVELLS") {
          setUser(o2.HAVCELLS);
        }
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <h1>{symbol} List</h1>
      <h2>Price List</h2>
      <ul>
        {user &&
          user.length > 0 &&
          user.map((userObj, index) => (
            <li key={userObj.id}>{userObj.price}</li>
          ))}
      </ul>
      <h2>Time List</h2>
      <ul>
        {user &&
          user.length > 0 &&
          user.map((userObj, index) => (
            <li key={userObj.id}>{userObj.time}</li>
          ))}
      </ul>
      <h2>Valid Till List</h2>
      <ul>
        {user &&
          user.length > 0 &&
          user.map((userObj, index) => (
            <li key={userObj.id}>{userObj.valid_till}</li>
          ))}
      </ul>
    </main>
  );
}

export default Instruments;
