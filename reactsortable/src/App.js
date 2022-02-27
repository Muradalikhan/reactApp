import React, { useState } from "react";
import {
  SortableContainer,
  SortableElement,
  arrayMove,
  SortableHandle,
} from "react-sortable-hoc";

const items = ["Item-1", "Item-2", "Item-3", "Item-4", "Item-5", "Item-6"];

const App = () => {
  const [state, setState] = useState(items);

  const Handle = SortableHandle(({ value }) => (
    <span
      style={{
        cursor: "pointer",
        background: "pink",
        padding: "10px",
        width: "30%",
        margin: 5,
      }}
    >
      {value}
    </span>
  ));

  const SortableItem = SortableElement(({ value }) => <Handle value={value} />);
  const SortableList = SortableContainer(({ items }) => {
    return (
      <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
        {state.map((value, index) => (
          <SortableItem key={`item-${value}`} index={index} value={value} />
        ))}
      </div>
    );
  });

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setState(arrayMove(state, oldIndex, newIndex));
  };

  return (
    <SortableList
      axis="xy"
      // useDragHandle
      transitionDuration={0}
      items={state}
      onSortEnd={onSortEnd}
    />
  );
};

export default App;
