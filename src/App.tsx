import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import WelcomePage from "./components/WelcomePage";
import {
  CardStackIcon,
  CheckCircledIcon,
  CircleIcon,
  PlusCircledIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { initDB, Stores, getStoreData, addData, deleteData, checkData } from "./utils/db";
import { ExternalLink } from "lucide-react";

interface Task {
  id: number;
  task: string;
  isCompleted: boolean;
}

export default function App() {
  const [task, setTask] = useState<Task>();
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [isDBReady, setIsDBReady] = useState<boolean>(false);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newTask = {
      id: taskList.length + 1,
      task: e.target.value,
      isCompleted: false,
    };
    setTask(newTask);
  }

  const addTask = useCallback(() => {
    if (task?.task) {
      setTaskList([...taskList, task]);
      setTask({
        id: 0,
        task: "",
        isCompleted: false,
      });
      addData("tasks", task);
    }
    console.log(taskList);
  }, [task, taskList]);

  async function checkTask(index: number) {
    try {
      await checkData(Stores.Tasks, taskList[index]);
      fetchIndexedDBData();
    } catch (error: unknown) {
      console.error("Something went wrong checking the task", error);     
    }
  }

  async function deleteTask(index: number) {
    try {
      const taskToDelete = taskList[index];
      await deleteData(Stores.Tasks, taskToDelete.id);
      // refetch users after deleting data
      fetchIndexedDBData();
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error("Something went wrong deleting the user");
      }
    }
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter") {
      addTask();
    }
  }

  async function handleInitDB() {
    await initDB().then((response) => {
      if (response) {
        setIsDBReady(true);
        fetchIndexedDBData();
      }
    });
  }

  async function fetchIndexedDBData() {
    const data = await getStoreData<Task>(Stores.Tasks);
    // console.log("fetchIndexedDBData", data);
    if (data) {
      setTaskList(data);
    }
  }

  useEffect(() => {
    // Initialize the DB only if it is not ready yet
    if (!isDBReady) handleInitDB();

    // if the user presses enter, set the task
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <>
      <WelcomePage />
      <main className="min-h-screen flex items-center justify-between bg-black text-white">
        <section
          id="section1"
          className="flex justify-center items-center w-1/2 min-h-screen"
        >
          <div className="flex flex-col justify-center items-center max-w-4xl mx-auto p-10 bg-black/40 backdrop-blur-sm rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.3)] border border-blue-900/30 relative overflow-y-auto">
            <Header />
            <div className="flex justify-between items-center gap-2 mt-10 w-full">
              <input
                type="text"
                placeholder="Let's get it done! Privately! 😎"
                value={task?.task ?? ""}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-md bg-blue-500/40 hover:bg-blue-500/50 active:bg-blue-500/30 text-white  transition-all duration-200 ease-in-out"
              />
              <button
                onClick={addTask}
                className="bg-white/20 hover:bg-white/30 active:bg-white/50 active:scale-95 text-white px-4 py-2 rounded-md h-full transition-all duration-200 ease-in-out"
              >
                <PlusCircledIcon className="size-6" />
              </button>
            </div>
            <span className="mt-10 italic text-blue-500">Developed by <a href="https://hemantsharma.tech/" target="_blank" className="hover:text-white transition-colors ease-in-out inline-flex justify-center items-center gap-1">Hemant Sharma <ExternalLink className="size-4" /></a></span>
          </div>
        </section>
        <section
          id="section2"
          className="flex justify-center items-center w-1/2 min-h-screen"
        >
          <div className="min-w-lg max-w-lg mx-auto p-10 bg-black/40 backdrop-blur-xs rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.3)] border border-blue-900/30 relative h-[500px] overflow-y-auto">
            <h2 className="flex gap-2 items-center text-2xl font-bold mb-6 text-blue-400">
              <CardStackIcon className="size-7" />
              <span>Your Tasks</span>
            </h2>
            {taskList.length === 0 ? (
              <div className="text-center py-6 text-gray-400">
                <p>No tasks yet. Add some tasks to get started!</p>
              </div>
            ) : (
              <ul className="space-y-3">
                {taskList.map((task, index) => (
                  <li
                    key={index}
                    className={`${
                      task.isCompleted ? "brightness-50" : ""
                    } flex items-center gap-3 p-3 rounded-md bg-blue-500/20 hover:bg-blue-500/30 transition-all duration-200 group`}
                  >
                    <button
                      onClick={() => checkTask(index)}
                      className="text-blue-500/80 group-hover:text-blue-500 active:scale-95 transition-all duration-200 hover:cursor-pointer"
                    >
                      {task.isCompleted ? (
                        <CheckCircledIcon className="size-5" />
                      ) : (
                        <CircleIcon className="size-5" />
                      )}
                    </button>
                    <span
                      className={`flex-grow ${
                        task.isCompleted ? "line-through" : ""
                      }`}
                    >
                      {task.task}
                    </span>
                    <button
                      onClick={() => deleteTask(index)}
                      className="text-red-500 brightness-50 hover:brightness-100 hover:bg-red-900 active:bg-red-950 active:scale-95 p-2 rounded transition-colors"
                    >
                      <TrashIcon className="size-5" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
