import { RiArrowRightUpFill } from "react-icons/ri";
import { useState } from "react";

export const AddComp = ({ addItem }) => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() !== "") {
      addItem(input);
      setInput(""); // Clear the input after adding
    }
  };

  return (
    <div className="bg-[#eeeeee] gap-1 p-1 pt-0 grow flex flex-row overflow-auto">
      {/* The input container */}
      <div className="inputContainer flex-grow">
        <input
          type="text"
          className="bg-transparent outline-none w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      {/* The Add/Send button */}
      <div
        className="flex myIcons h-[30px] border border-[#c5c5c5] cursor-pointer"
        onClick={handleAdd}
      >
        <div className="h-full w-[28px] inner-con flex items-center justify-center text-xl">
          <RiArrowRightUpFill />
        </div>
      </div>

    
    </div>
  );
};
