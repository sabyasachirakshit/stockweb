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
