import React from "react";

const Seat = (props) => {
  return (
    <div className={`${props.className} py-10 px-10 rounded-md max-w-[96px] text-white font-semibold`}>
      {props.children}
    </div>
  );
};

export default Seat;
