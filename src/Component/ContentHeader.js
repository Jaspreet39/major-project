import React from "react";

function ContentHeader({ title, desc }) {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl xl:text-4xl  text-center">{title}</h1>
      <div className="w-full text-center flex justify-center">
        <p className="text-2xl  leading-6 max-w-[100%]  md:max-w-[80%] xl:mx-w-[60%]  text-gray-400">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default ContentHeader;
