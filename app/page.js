"use client";

import React from "react";
import Hero from "./_components/Hero";
import CategoryList from "./_components/CategoryList";
import GlobalApi from "./_services/GlobalApi";
import { useEffect } from "react";
import { useState } from "react";
import BusinessList from "./_components/BusinessList";
useState;
const Page = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [businessList, setBusinessList] = useState([]);
  useEffect(() => {
    getCategoryList();
    getAllBusinessList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      setCategoryList(resp.categories);
    });
  };

  const getAllBusinessList = () => {
    GlobalApi.getAllBusinessList().then((resp) => {
      setBusinessList(resp.businessLists);
      // console.log(resp.businessLists[0].category.name);
    });
  };

  return (
    <div>
      <Hero /> <CategoryList categoryList={categoryList} />{" "}
      <BusinessList businessList={businessList} title={"Popular Business"} />
    </div>
  );
};

export default Page;
