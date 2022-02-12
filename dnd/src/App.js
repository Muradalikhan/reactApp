import "./App.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";

const items = [
  { id: "1", item: "item 1" },
  { id: "2", item: "item 2" },
  { id: "3", item: "item 3" },
  { id: "4", item: "item 4" },
  { id: "5", item: "item 5" },
  { id: "6", item: "item 6" },
  { id: "7", item: "item 7" },
  { id: "8", item: "item 8" },
  { id: "9", item: "item 9" },
  { id: "10", item: "item 10" },
];

const App = () => {
  const [list, setList] = useState(items);
  const grid = 8;

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    width: 250,
  });

  const getListStyleHoriz = (isDraggingOver) => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    display: "flex",
    alignSelf: "self-start",
    padding: grid,
    margin: 20,
  });

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const items = Array.from(list);
    const [newOrder] = items.splice(source.index, 1);
    items.splice(destination.index, 0, newOrder);
    setList(items);
  };

  return (
    <div className="App" style={{ display: "flex" }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {list.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      style={{ display: "flex", flexDirection: "row" }}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {item.item}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {/* horizental */}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyleHoriz(snapshot.isDraggingOver)}
            >
              {list.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      style={{ display: "flex", flexDirection: "row" }}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {item.item}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
export default App;
