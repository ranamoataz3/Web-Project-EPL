import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = (props) => {
  return (
    <div className="flex justify-center items-center w-[100%] h-[100%]">
      <ClipLoader color={props.color} size={100} borderWidth={200} />
    </div>
  );
};

export default Loader;
