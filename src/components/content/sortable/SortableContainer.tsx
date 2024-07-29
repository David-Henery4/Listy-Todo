"use client";
import { useState, SetStateAction } from "react";
import {
  closestCenter,
  DndContext,
  DragOverlay,
  DragStartEvent,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
  Active,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import SortableTodo from "./SortableTodo";
import Todo from "../todo/Todo";

interface TempTodoSchema {
  id: number,
  title: string
}

const SortableContainer = () => {
  const [activeId, setActiveId] = useState<UniqueIdentifier>(0);
  const [activeItem, setActiveItem] = useState<TempTodoSchema>({
    id: 0,
    title: "",
  });
  const [items, setItems] = useState([
    { id: 164533, title: "hello" },
    { id: 7253543, title: "Goodbye" },
    { id: 7345223, title: "Ciao" },
  ]);
  // const [items, setItems] = useState(["1", "2", "3"]);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  //
  const handleDragStart = (event: DragStartEvent) => {
    console.log(event);
    const { active } = event;
    setActiveId(active.id);
    setActiveItem(() => items.filter((item) => item.id === active.id)[0]);
  };
  //
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    //
    if (active.id !== over.id) {
      setItems((items) => {
        const testIndexOld = items.map((item) => item.id).indexOf(active.id);
        const testIndexNew = items.map((item) => item.id).indexOf(over.id);
        // const oldIndex = items.indexOf(active.id);
        // const newIndex = items.indexOf(over.id);
        const newArray = arrayMove(items, testIndexOld, testIndexNew);
        return newArray;
      });
    }
    //
    setActiveId(null);
  };
  //
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items.map((item) => {
          return <SortableTodo key={item.id} {...item} />;
        })}
      </SortableContext>
      <DragOverlay>
        {activeId ? <Todo title={activeItem.title} /> : null}
      </DragOverlay>
    </DndContext>
  );
};

export default SortableContainer;
