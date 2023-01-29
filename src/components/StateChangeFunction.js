import React from "react";
import { useState } from "react";

const initialItems = [
  { id: 0, name: "Indian Cuisine" },
  { id: 1, name: "Italian Cuisine" },
  { id: 2, name: "Chinese Cuisine" },
];
export default function StateChangeFunction() {
  const [items, setItems] = useState(initialItems);
  const [selectedId, setSelectedId] = useState(0);
  const selectedItem = items.find((item) => item.id === selectedId);
  function handleItemChange(id, e) {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            name: e.target.value,
          };
        } else {
          return item;
        }
      })
    );
  }
  return (
    <>
      <h2>What's your travel snack?</h2>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            <input
              value={item.name}
              onChange={(e) => {
                handleItemChange(item.id, e);
              }}
            />{" "}
            <button
              onClick={() => {
                setSelectedId(item.id);
              }}
            >
              Choose
            </button>
          </li>
        ))}
      </ul>
      <p>You picked {selectedItem.name}.</p>
    </>
  );
}
