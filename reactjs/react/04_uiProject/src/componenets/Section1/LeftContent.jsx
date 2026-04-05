import { RiArrowRightUpLine } from "@remixicon/react";
const LeftContent = () => {
  return (
    <div className="h-full leading-[1.1] w-1/3  flex flex-col justify-between">
      <div className="p-6">
        <h3 className=" mb-7 text-7xl font-bold ">
          Prospective
          <br />
          <span className="text-gray-600 ">Customer</span>
          <br />
          <span>Segmentation</span>
        </h3>
        <p className="text-xl w-[90%] font-medium text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut itaque,
          asperiores ipsa enim in officiis.
        </p>
      </div>
      <div>
        <RiArrowRightUpLine size={84} />
      </div>
    </div>
  );
};

export default LeftContent;
