import React from "react";
import { IoMdContact } from "react-icons/io";

function EmployeeListItem({ name, desc }) {
  return (
    <div className="flex items-center border p-2 my-1">
      <IoMdContact className="w-10 h-10" />
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-xs">{desc}</p>
      </div>
    </div>
  );
}

export default EmployeeListItem;
