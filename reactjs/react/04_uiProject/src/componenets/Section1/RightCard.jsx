import React from "react";
import { RiArrowRightLine } from "@remixicon/react";

const RightCard = (props) => {
  return (
    <div className="relative h-full w-80 overflow-hidden rounded-4xl bg-blue-600 shrink-0">
      {/* Image */}
      <img
        className="h-full w-full object-cover"
        src={props.image}
        alt="card"
      />

      {/* Overlay */}
      <div className="absolute inset-0  p-8 flex flex-col justify-between">
        {/* Top Number */}
        <h2 className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl font-bold">
          {props.id + 1}
        </h2>

        {/* Bottom Content */}
        <div className="space-y-4">
          <p className="text-xl text-shadow-2xs leading-relaxed text-white max-w-[220px] mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className="flex justify-between items-center">
            <button className=" bg-blue-600 text-white rounded-full  px-8 py-2 text-sm font-medium">
              {props.tag}
            </button>

            <button className=" bg-blue-600 text-white rounded-full  px-4 py-2 text-sm font-medium ">
              <RiArrowRightLine size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
