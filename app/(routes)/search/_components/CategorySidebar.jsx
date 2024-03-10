"use client";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../../_services/GlobalApi";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CategorySidebar = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const params = usePathname();
  const category = params.split("/")[2];
  useEffect(() => {
    console.log(category);
    getCategoryList();
  }, []);

  useEffect(() => {
    params && setSelectedCategory(params.split("/")[2]);
  }, [params]);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      setCategoryList(resp.categories);
      //   console.log(resp.categories);
    });
  };
  return (
    <div>
      <h2 className="font-bold mb-3 text-lg text-primary ">Categories</h2>
      <div>
        {categoryList.map((category, index) => (
          <Link
            href={"/search/" + category.name}
            key={index}
            className={`flex gap-3 p-3 border rounded-lg cursor-pointer mb-3 md:mr-10 hover:bg-purple-50 hover:text-primary hover:border-primary hover:shadow-md items-center ${
              selectedCategory == category.name && "border-primary bg-purple-50 text-primary font-bold"
            } `}
          >
            <h2>{category.name}</h2>
            <Image
              src={category.icon.url}
              alt="category_image_url"
              width={35}
              height={35}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySidebar;
