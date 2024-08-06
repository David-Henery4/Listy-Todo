"use client";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { UserId } from "@/components/TodosContent";
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
import { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";

export interface TempTodoSchema {
  id: string;
  userId: string;
  todoContent: string;
  isCompleted: boolean;
}

export interface TodoSchema {
  id: string;
  userId: string;
  todoContent: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface DnDTypes {
  listeners?: SyntheticListenerMap;
  style?: {
    transform: string | undefined;
    transition: string | undefined;
  };
  setNodeRef?: (node: HTMLElement | null) => void;
  setActivatorNodeRef?: (node: HTMLElement | null) => void;
} 

type ActiveIdState = UniqueIdentifier | null;

interface SortableContainerProps extends UserId {
  todosList: TodoSchema[]
}

// type SortableContainerProps = UserId & TodoSchema[]

const SortableContainer = ({ userId, todosList }: SortableContainerProps) => {
  const [activeId, setActiveId] = useState<ActiveIdState>(null);
  const [activeItem, setActiveItem] = useState<TodoSchema>({
    id: "",
    userId: userId,
    todoContent: "",
    isCompleted: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  const [items, setItems] = useState<TodoSchema[]>(todosList);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  //
  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    setActiveId(active.id);
    setActiveItem(() => items.filter((item) => item.id === active.id)[0]);
  };
  //
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    //
    if (over !== null && active.id !== over.id) {
      setItems((items) => {
        const testIndexOld = items
          .map((item) => item.id)
          .indexOf(String(active.id));
        const testIndexNew = items
          .map((item) => item.id)
          .indexOf(String(over.id));
        const newArray = arrayMove(items, testIndexOld, testIndexNew);
        return newArray;
      });
    }
    //
    setActiveId(null);
  };
  //
  useEffect(() => {
    // WAS THE PROBLEM!
    setItems(todosList)
  }, [todosList])
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
      <DragOverlay>{activeId ? <Todo {...activeItem} /> : null}</DragOverlay>
    </DndContext>
  );
};

export default SortableContainer;
