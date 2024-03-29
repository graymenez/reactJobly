import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JoblyApi from "./api";
import { v4 } from "uuid";
const Companies = ({ token, currentUser }) => {
  const [companies, setCompanies] = useState([{}]);
  const [isCompany, setIsCompany] = useState(true);

  useEffect(() => {
    //Gets data on all companies and stores it in companies state. Rendering all companies on /companies.
    const getData = async () => {
      let data = await JoblyApi.getAllCompanies();
      setCompanies(data);
    };
    getData();
  }, []);
  return (
    <div>
      <h1>All Companies</h1>
      {!isCompany ? (
        <h1>No Companies to Show</h1>
      ) : (
        <ul>
          {companies.map((com, i) => (
            <div
              key={v4()}
              style={{
                listStyle: "none",
                float: "left",
                border: "5px solid #778899",
                borderRadius: "7px",
                padding: "2px",
                margin: "2px",
                textAlign: "center",
                display: "inline-block",
                width: "20%",
                marginLeft: "10%",
                marginBottom: "1%",
                backgroundColor: "#DCDCDC	",
              }}
            >
              <li>
                <h4 style={{ marginBottom: "10%" }}>{com.name}</h4>
                <Link
                  style={{
                    borderRadius: "2px",
                    boxShadow: "0px 4px 4px 0px #A9A9A9",
                    backgroundColor: "#808080",
                    color: "white",
                    padding: "4px 20px",
                    fontSize: "15px",
                  }}
                  to={
                    currentUser && token ? `/companies/${com.handle}` : "/login"
                  }
                >
                  View
                </Link>
              </li>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Companies;
