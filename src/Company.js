import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";
const Company = () => {
  //Uses params to call ".getCompany()" by company handle

  const { company } = useParams();
  const [com, setCompany] = useState({});
  useEffect(() => {
    //Use company param here and save result to "com" state.
    const getCom = async (handle) => {
      let res = await JoblyApi.getCompany(handle);
      setCompany(res);
    };
    getCom(company);
  }, []);
  //Pass "com" state in "companyDetails" prop.
  return (
    <>
      <CompanyCard companyDetails={com} />
    </>
  );
};
export default Company;
