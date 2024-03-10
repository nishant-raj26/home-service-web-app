import React from "react";
import Image from "next/image";
import { Button } from "../../../../components/ui/button";
import { MapPin, Mail, Share, User, Clock } from "lucide-react";
const BusinessInfo = ({ business }) => {
  return (
    business?.category?.name && (
      <div className="md:flex gap-4 items-center">
        <Image
          src={business?.images[0]?.url}
          alt="business_image"
          height={200}
          width={150}
          className="rounded-full h-[150px] object-cover "
        />
        <div className="flex justify-between items-center w-full ">
          <div className="flex mt-4 md:mt-0 flex-col items-baseline gap-4">
          <h2> {business?.name} </h2>
            <h2 className="text-primary bg-purple-100 rounded-full px-3 p-1 text-lg">
              {" "}
              {business?.category?.name}{" "}
            </h2>
            <h2 className=" text-[20px] md:text-[40px] flex gap-2 text-lg ">
              <MapPin /> {business.address}
            </h2>
            <h2 className="flex gap-2 text-lg text-gray-400 ">
              {" "}
              <Mail /> {business?.email}{" "}
            </h2>
          </div>
          <div className="flex flex-col gap-5 items-end " >
            <Button>
              <Share />
            </Button>
            <h2 className="flex gap-2 text-xl text-primary ">
              {" "}
              <User /> {business?.contactPerson}{" "}
            </h2>
            <h2 className="flex gap-2 text-xl text-gray-400 ">
              {" "}
              <Clock /> Available 8:00 AM - 8:00 PM{" "}
            </h2>
          </div>
        </div>
      </div>
    )
  );
};

export default BusinessInfo;
