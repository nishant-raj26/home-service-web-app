import React from "react";
import Image from "next/image";

const BusinessDescription = ({ business }) => {
  return (
    business?.category?.name && (
      <div>
        <h2 className="font-bold text-[25px] ">Description</h2>
        <p className="mt-4 text-lg text-gray-700 "> {business?.about} </p>
        <h2 className="font-bold text-[25px] mt-8 ">Gallery</h2>
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 ">
          {business?.images?.map((item, index) => (
            <Image
              src={item?.url}
              key={index}
              alt="business_image"
              height={200}
              width={700}
              className="rounded-lg"
            />
          ))}
        </div>
      </div>
    )
  );
};

export default BusinessDescription;
