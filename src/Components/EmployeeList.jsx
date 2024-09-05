import React from "react";
import EmployeeListItem from "./EmployeeListItem";

export default function EmployeeList() {
  const employeeList = [
    { name: "James King", desc: "President and CEO" },
    { name: "Julie Taylor", desc: "VP of Marketing" },
    { name: "Eugene Lee", desc: "CFO" },
    { name: "John Williams", desc: "VP of Engineering" },
    { name: "Ray Moore", desc: "VP of Sales" },
    { name: "Paul Jones", desc: "QA Manager" },
  ];
  return (
    <div>
      {employeeList.map((employee) => (
        <EmployeeListItem name={employee.name} desc={employee.desc} />
      ))}
    </div>
  );
}
