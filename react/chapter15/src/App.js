import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

function App() {
  const [tasks, setTasks] = useState([]);

  const httpData = useHttp();
  //자바스크립트에서 분해 문법에 콜론을 추가하여 새로운 이름을 부여할 수 있다.
  const { isLoading, error, sendRequest: fetchTasks } = httpData;

  useEffect(() => {
    const transformTask = (taskobj) => {
      const loadedTasks = [];

      for (const taskKey in taskobj) {
        loadedTasks.push({ id: taskKey, text: taskobj[taskKey].text });
      }

      setTasks(loadedTasks);
    };

    fetchTasks(
      {
        url: "https://react-http-f965b-default-rtdb.firebaseio.com/tasks.json",
      },
      transformTask
    );
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
