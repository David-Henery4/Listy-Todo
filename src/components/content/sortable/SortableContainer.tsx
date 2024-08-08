"use client";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { UserId } from "@/components/TodosContent";
import { updateListOrder } from "@/actions/mutations/updateTodo";
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

interface SortableContainerProps extends Omit<UserId, "searchParams"> {
  todosList: TodoSchema[];
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
        console.log(
          newArray,
          `testIndexOld: ${testIndexOld}`,
          `testIndexNew: ${testIndexNew}`
        );

        //// Check for order number update
        const rayWithIndex = newArray.map((item,i,_) => {
          return {...item, order: i}
        })
        console.log("Array with order: ", rayWithIndex)
        ////


        return newArray;
      });
    }
    //
    setActiveId(null);
  };
  //
  const saveUpdatedListOrder = async (rayWithIndex) => {
    const res = await updateListOrder(userId, rayWithIndex);
    console.log(res)
  };
  //
  useEffect(() => {
    saveUpdatedListOrder(items)
  }, [items])
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
