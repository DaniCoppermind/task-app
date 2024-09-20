import TaskItem from './TaskItem';
import { useTasks } from '../context/UseTasks';

function TaskList() {
  const {tasks} = useTasks()

  return (
    <section>
      {tasks.map((task) => (
        <TaskItem task={task} key={task._id} />
      ))}
    </section>
  );
}

export default TaskList;
