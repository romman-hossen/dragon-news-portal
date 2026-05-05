import Link from "next/link";
import React from "react";

const LeftSideBar = ({ categories,activeId }) => {
  // console.log(categories,'this is left sidevar');
  return (
    <div>
      <ul
        className={`flex flex-col gap-7 text-lg font-medium text-gray-500`}
      >
        {categories.map((category) => {
          return <li key={category.category_id}
          className={`${activeId === category.category_id && 'bg-gray-50 text-gray-800'}  cursor-pointer text-center`}
          >
          <Link href={`/category/${category.category_id}`}
          className="p-3 block ">
          {category.category_name}
          </Link>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default LeftSideBar;
