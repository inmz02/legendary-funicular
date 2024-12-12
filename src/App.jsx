import Header from "./comps/Header";
import { MainContainer } from "./comps/MainContainer";
import { AddComp } from "./comps/AddComp";
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("todo-items"));
    if (savedItems && Array.isArray(savedItems)) {
      setItems(savedItems);
    }
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem("todo-items", JSON.stringify(items));
    }
  }, [items]);

  const addItem = (text) => {
    const newItem = { text, completed: false };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
  };

  const toggleCompletion = (index) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setItems(updatedItems);
  };

  return (
    <div className="bg-white sm:w-full lg:w-[20%] w-full border border-[#b5b5b5]">
      <div className="h-full border border-[#ffffff] flex flex-col">
        <Header />
        <MainContainer
          items={items}
          toggleCompletion={toggleCompletion}
          setItems={setItems}
        />
        <AddComp addItem={addItem} />
      </div>
    </div>
  );
}

export default App;
