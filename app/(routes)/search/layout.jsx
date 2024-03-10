import React from "react";
import CategorySidebar from "./_components/CategorySidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="grid col-span-1 md:grid-cols-4 mt-8 ">
        <div className=" md:block hidden ">
          <CategorySidebar />
        </div>
        <div className=" md:col-span-3 ">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
