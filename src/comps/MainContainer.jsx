import { MyDate } from "./MyDate";
import { FaMinusCircle } from "react-icons/fa";
import { useState } from "react";

export const MainContainer = ({ items, toggleCompletion, setItems }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleItemClick = (index) => {
    // Toggle selection; if already selected, unselect it
    setSelectedIndex(index === selectedIndex ? null : index);
  };

  const handleDelete = (index) => {
    // Remove the item from the items array
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);

    // Update localStorage with the modified items array
    localStorage.setItem("todo-items", JSON.stringify(updatedItems));

    // Deselect the item after deletion
    setSelectedIndex(null);
  };

  return (
    <div className="border-t border-white bg-[#eeeeee] p-1 grow flex flex-col overflow-auto">
      <div className="xs:h-[500px] md:h-[400px] bg-black text-[#FAFAFE] p-2 flex flex-col gap-8 overflow-auto border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#FAFAFE] border-r-[#FAFAFE] xs:text-base md:text-xs">
        <MyDate />
        {/* Displaying the list items */}
        <div>
          <div className="flex flex-col gap-2 w-full p-1">
            {items.map((item, index) => (
              <div
                key={index}
                className={`flex grow listItem ${
                  selectedIndex === index ? "selected" : ""
                }`}
                onClick={() => handleItemClick(index)}
              >
                <p className="flex-grow">
                  <span
                    className="checkbox cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering selection when clicking the checkbox
                      toggleCompletion(index);
                    }}
                  >
                    [{" "}
                    <span className={item.completed ? "completed" : ""}>
                      {item.completed ? "x" : " "}
                    </span>{" "}
                    ] -
                  </span>{" "}
                  {item.text}
                </p>
                {/* Delete button appears only when the list item is selected */}
                {selectedIndex === index && (
                  <div
                    className="w-3 text-red-500 flex justify-center text-right cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering selection when clicking the delete button
                      handleDelete(index);
                    }}
                  >
                    <FaMinusCircle />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
