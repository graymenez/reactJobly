import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";
const Company = () => {
  const { company } = useParams();
  const [com, setCompany] = useState({});
  useEffect(() => {
    const getCom = async (handle) => {
      let res = await JoblyApi.getCompany(handle);
      setCompany(res);
    };
    getCom(company);
  }, []);

  return (
    <>
      <CompanyCard companyDetails={com} />
    </>
  );
};
export default Company;
