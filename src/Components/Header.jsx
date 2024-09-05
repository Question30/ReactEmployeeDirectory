import React from "react";

function Header({ heading, arrow }) {
  const char = "<";
  if (arrow) {
    return (
      <div className="flex flex-row border font-medium p-1">
        <p className="font-bold text-2xl text-gray-500">{char}</p>
        <p className="mx-auto">{heading}</p>
      </div>
    );
  } else {
    return <div className="border text-center font-medium p-1">{heading}</div>;
  }
}

export default Header;
