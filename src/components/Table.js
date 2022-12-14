import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import "./DesignTable.css";
function Table() {
  // State to store parsed data
  const [parsedData, setParsedData] = useState([]);


  //State to store table Column name
  const [tableRows, setTableRows] = useState([]);

  //State to store the values
  const [values, setValues] = useState([]);

  const changeHandler = (event) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        var valuesArray = [];

        // Iterating data to get column name and their values
        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });

        // Parsed Data Response in array format
        setParsedData(results.data);

        // Filtered Column Names
        setTableRows(rowsArray[0]);

        //Filtered Values
        setValues(valuesArray);
      },
    });
  };

  useEffect(() => {
    document.getElementById("myInput").addEventListener("input", (e) => {
      e.preventDefault();
      // Declare variables
      var input, filter, table, tr, td, i, txtValue;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      table = document.getElementById("myTable");
      tr = table.getElementsByTagName("tr");

      // Loop through all table rows, and hide those who don't match the search query
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    });
  }, []);

  var string = "/";
  return (
    <div>
      <div className="container">
        Download CSV File:
        <a href="https://prototype.sbulltech.com/api/v2/instruments">
          <button>Click here to download CSV file</button>
        </a>
      </div>
      {/* File Uploader */}
      <input
        type="file"
        name="file"
        onChange={changeHandler}
        accept=".csv"
        style={{ display: "block", margin: "10px auto" }}
      />

      <br />
      <br />
      {/* Table */}
      <table id="myTable">
        <thead>
          <tr>
            {tableRows.map((rows, index) => {
              return <th key={index}>{rows}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {values.map((value, index) => {
            return (
              <tr key={index}>
                {value.map((val, i) => {
                  if (i === 0) {
                    string = "/";
                    string += val;
                    return (
                      <a href={string}>
                        <td key={i}>{val}</td>
                      </a>
                    );
                  } else {
                    return <td key={i}>{val}</td>;
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
