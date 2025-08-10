import React from "react";
import BadgeButton from "../ui/badge-button";
import AiInput from "../ui/ai-input";

const Aiinput = () => {
  return (
    <div className="w-[53.5%] p-2 my-20 rounded-3xl shadow bg-white mx-auto ">
      <div className="h-full p-6 bg-[#f4f4f4] shadow rounded-3xl mx-auto">
         <BadgeButton />
         <h2 className="text-4xl font-bold">AI input</h2>
         <h4 className="mb-10">Sameless AI chat input box</h4>
         <AiInput/>
      </div>
    </div>
  );
};

export default Aiinput;
