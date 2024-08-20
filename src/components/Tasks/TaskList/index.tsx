import { CheckCircle, Circle, Trash } from "phosphor-react";
import { TaskListSection, TaskListHeaderItem, TaskListTable, TaskListItem } from "./styles";

interface TaskListProps {
    activeTasks: string[]
    completedTasks: string[]
    setTaskAsCompleted: (task: string) => void
    removeTask: (task: string) => void
}

export function TaskList({activeTasks, completedTasks, setTaskAsCompleted, removeTask}: TaskListProps) { 
    const numberOfCompletedTasks = completedTasks.length;
    const numberOfTasks = activeTasks.length + numberOfCompletedTasks;

    return (
      <TaskListSection>
          <header>
              <TaskListHeaderItem>
                  <p>Tarefas criadas</p>
                  <span>{numberOfTasks}</span>
              </TaskListHeaderItem>
              <TaskListHeaderItem isCompleted>
                  <p>Concluídas</p>
                  <span>{numberOfCompletedTasks} de {numberOfTasks}</span>
              </TaskListHeaderItem>
          </header>
          <TaskListTable>
              <tbody>

                  {activeTasks.map(taskText => (
                    <TaskListItem key={taskText}>
                      <td onClick={() => setTaskAsCompleted(taskText)}><Circle color="#4EA8DE" size={18}/></td>
                      <td width="90%">{taskText}</td>
                      <td> <Trash color="#808080" size={15} onClick={() => removeTask(taskText)}/> </td>
                    </TaskListItem>
                  ))}
                  {completedTasks.map(taskText => (
                    <TaskListItem isCompleted  key={taskText}>
                      <td> <CheckCircle color="#5E60CE" size={18}/> </td>
                      <td width="90%">{taskText}</td>
                      <td> <Trash color="#808080" size={15} onClick={() => removeTask(taskText, true)}/> </td>
                    </TaskListItem>
                  ))}
              </tbody>
          </TaskListTable>
      </TaskListSection>
    )
  }