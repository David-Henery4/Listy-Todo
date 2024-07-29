import { forwardRef, ForwardedRef } from "react";
import { CrossIcon, DragHandleIcon } from "../../../../public/images";

const Todo = forwardRef(({ id, title, listeners, ...props }, ref) => {
  let ref1;
  let ref2;
  if (ref){
    const { setNodeRef, setActivatorNodeRef } = ref;
    ref1 = setNodeRef
    ref2 = setActivatorNodeRef
  }
  // will convert text to input on click for editing
  //
  return (
    <li
      ref={ref1}
      {...props}
      className="px-5 py-4 flex justify-start items-center border-b border-b-border_light smLap:px-6 smLap:py-5 dark:border-b-border_dark"
    >
      <div ref={ref2} {...listeners}>
        <DragHandleIcon
          // ref={setActivatorNodeRef}
          // {...listeners}
          // {...props}
          // {...events}
          className="mr-2 fill-todoText_light hover:cursor-grab dark:fill-todoText_dark"
        />
      </div>
      <button className="w-5 h-5 rounded-full border border-border_light dark:border-border_dark">
        <span></span>
        <span className="sr-only">Toggle todo completed or uncompleted</span>
      </button>
      <p className="text-xs text-todoText_light ml-3 mr-auto flex-1 smLap:text-lg dark:text-todoText_dark hover:cursor-pointer">
        {title}
      </p>
      <span className="hover:cursor-pointer">
        <CrossIcon />
      </span>
    </li>
  );
});

Todo.displayName = "Todo";

export default Todo;
