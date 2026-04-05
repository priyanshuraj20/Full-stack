import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-4 px-10">
      <h4 className="bg-black text-white uppercase px-6 py-2 rounded-full text-sm tracking-widest">
        Target Audiance
      </h4>
      <button className="bg-gray-200 text-black uppercase px-6 py-2 rounded-full text-sm tracking-widest">
        Digital Banking Platform
      </button>
    </div>
  );
};

export default Header;
