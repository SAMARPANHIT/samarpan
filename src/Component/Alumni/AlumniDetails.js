import React from "react";
import "./alumni.css";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";


const AlumniDetails = () => {


  const temp = useParams();
  const [data, setData] = useState();

  const url = `https://script.google.com/macros/s/AKfycby6k_7jCqHzy6fcmZ_Svsttql1j_4s6YTmGO-gYaKOAmR6oWYuTJCXhR-dwVGx8CKh2/exec?year=${temp.year}`;
  async function getData() {
    try {
      console.log("Fetching URL: ", url);  // Log the URL
      let fdata = await fetch(url);
      if (!fdata.ok) {
        throw new Error("Network response was not ok");
      }
      fdata = await fdata.json();
      console.log("Fetched data: ", fdata);  // Log the fetched data
      setData(fdata.data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setData([]);  // Set data to empty array or show error message
    }
  }
  
  useEffect(() => {
    console.log("Fetching data for year:", temp.year); // Log the year
    getData();
  }, [temp.year]);
  
  

  return (
    <div className="AlumniContainer">
      <span className="year">
        {temp.year - 4}-{temp.year}
      </span>
      <div className="main-table">
        {!data ? (
          <div className="loader">
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
          </div>
        ) : (
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Department</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              {!data || !data.length ? (
                "No data found"
              ) : (
                data.map((item, i) => (
                  <tr key={i}>
                    <td>{item.Name}</td>
                    <td>{item.Role}</td>
                    <td>{item.Department}</td>
                    <td>{item.Year}</td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default AlumniDetails;
