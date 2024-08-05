import { CheckIcon } from "../../../../../public/images";
import { updateTodoStatusAction } from "@/actions/mutations/updateTodo";
import { useRouter } from "next/navigation";

interface StatusToggleTypes {
  isCompleted: boolean,
  id: string
}

const StatusToggle = ({ isCompleted, id }: StatusToggleTypes) => {
  const router = useRouter()
  console.log("testing")
  //
  return (
    <button
      onClick={async () => {
        const res = await updateTodoStatusAction(id, !isCompleted)
        console.log(res.msg)
        if (res.msg === "Done!"){
          console.log("Completed")
          // window.location.reload()
          // router.push("/")
          router.refresh()
        }
      }}
      className={`w-7 h-7 rounded-full outline-none inline-grid place-items-center ${
        isCompleted
          ? "bg-gradient-to-br from-checkBackgroundBottom to-checkBackgroundTop"
          : "border border-border_light dark:border-border_dark"
      }`}
    >
      {isCompleted && (
        <span>
          <CheckIcon />
        </span>
      )}
      <span className="sr-only">Toggle todo completed or uncompleted</span>
    </button>
  );
};

export default StatusToggle