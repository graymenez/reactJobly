import React from "react";

const CompanyCard = ({ companyDetails }) => {
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
  console.log(companyDetails);
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
  return (
    <div className="CompanyCard">
      <h1>{companyDetails.name}</h1>
      <p>{companyDetails.description}</p>
      <p>
        <b>Number of employees : {companyDetails.numEmployees}</b>
      </p>
    </div>
  );
};
export default CompanyCard;
