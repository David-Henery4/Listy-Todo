"use client";
import { useState, useEffect } from "react";
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
import { PropsWithChildren } from "react";

export interface TodoSchema {
  id: string;
  userId: string;
  todoContent: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  orderNumber: number;
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

// The Components in the "Todo" Components
// "EditInput", "StatusToggle" & "DeleteBtn"
// Have the "setItems" function to update the client side data
// While the data gets saved to the database
// Helps make the changes LOOK faster
// But could be problems if errors occur when sending data

const SortableContainer = ({
  userId,
  todosList,
  children,
}: PropsWithChildren<SortableContainerProps>) => {
  const [activeId, setActiveId] = useState<ActiveIdState>(null);
  const [activeItem, setActiveItem] = useState<TodoSchema>({
    id: "",
    userId: userId,
    todoContent: "",
    isCompleted: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    orderNumber: todosList.length + 1,
  });
  const [items, setItems] = useState<TodoSchema[]>(todosList);
  //
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

        //Check for order number update
        const newArrayWithNewOrderNumber = newArray.map((item, i, _) => {
          return { ...item, orderNumber: i };
        });

        return newArrayWithNewOrderNumber;
      });
    }
    //
    setActiveId(null);
  };
  //
  useEffect(() => {
    async function saveUpdatedListOrder(rayWithIndex: TodoSchema[]) {
      await updateListOrder(userId, rayWithIndex);
    }
    saveUpdatedListOrder(items);
  }, [items]); // eslint-disable-line react-hooks/exhaustive-deps
  //
  useEffect(() => {
    // WAS THE PROBLEM!
    setItems(todosList);
  }, [todosList]);
  //
  return (
    <>
      {items.length <= 0 ? (
        <li className="px-5 py-4 flex justify-between items-center text-xs text-labelGrey_light smLap:px-6 smLap:py-5 dark:text-dragNDropLabel_dark">
          <p className="w-full text-center text-base">
            You have no todos! Please create a todo to get started
          </p>
        </li>
      ) : (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            {items.map((item) => {
              return (
                <SortableTodo key={item.id} {...item} setItems={setItems} />
              );
            })}
          </SortableContext>
          <DragOverlay>
            {activeId ? <Todo {...activeItem} /> : null}
          </DragOverlay>
        </DndContext>
      )}
      {items.length >= 1 && <>{children}</>}
    </>
  );
};

export default SortableContainer;
