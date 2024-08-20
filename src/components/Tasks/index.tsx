import { PlusCircle } from "phosphor-react";
import { useState } from "react";
import { TasksContainer, NewTaskForm } from "./styles";
import { TaskList } from "./TaskList";

export function Tasks() {

  const [activeTasks, setActiveTasks] = useState([] as string[]);
  const [completedTasks, setCompletedTasks] = useState([] as string[]);

  const addItemToTaskList = (event: Event) => {
    event.preventDefault();
    //@ts-ignore
    const newItem = event?.target?.taskName?.value;
    if(newItem) {
      setActiveTasks(state => [newItem, ...state]);
      event.target.taskName.value = ""
    }
  }

  const setTaskAsCompleted = (completedTask: string) => {
    console.log(completedTask);
    setCompletedTasks(state => [completedTask, ...state]);
    removeTask(completedTask)
  }

  const removeTask = (taskToRemove: string, isCompleted?: boolean) => {
    if(isCompleted) {
      setCompletedTasks(state => {
        const currentCompletedTasks = [...state];
        const taskToRemoveIndex = completedTasks.findIndex(item => item === taskToRemove);
        return taskToRemoveIndex >= 0 ? currentCompletedTasks.toSpliced(taskToRemoveIndex, 1) : state
      })
    } else {
      setActiveTasks(state => {
        const currentActiveTasks = [...state];
        const taskToRemoveIndex = activeTasks.findIndex(item => item === taskToRemove);
        return taskToRemoveIndex >= 0 ? currentActiveTasks.toSpliced(taskToRemoveIndex, 1) : state
      })
    }
  }

    return (
      <TasksContainer>
          <NewTaskForm onSubmit={(event: Event) => addItemToTaskList(event)}>
              <input placeholder="Adicione uma nova tarefa" id="taskName" minLength={5} required/>
              <button type="submit">Criar <PlusCircle/> </button>
          </NewTaskForm>

          <TaskList activeTasks={activeTasks} completedTasks={completedTasks} setTaskAsCompleted={setTaskAsCompleted} removeTask={removeTask}/>
      </TasksContainer>
    )
  }