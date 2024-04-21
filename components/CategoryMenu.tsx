import React from "react";
import { CiCircleList } from "react-icons/ci";
import CategorySheet from "./CategorySheet";

const CategoryMenu = () => {
  return (
    <React.Fragment>
      <div className="mb-6 hidden md:block px-12">
        <ul className="flex gap-4">
          <li>Law</li>
          <li>Securities</li>
          <li>Marketing</li>
          <li>Stock Market</li>
          <li>Private Equity</li>
        </ul>
      </div>
      <div className="md:hidden">
        <CategorySheet />
      </div>
    </React.Fragment>
  );
};

export default CategoryMenu;
