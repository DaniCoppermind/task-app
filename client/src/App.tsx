import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { TaskProvider } from './context/TaskContext';

function App() {
  return (
    <div className='bg-zinc-900 h-screen text-white flex items-center justify-center'>
      <main className='bg-gray-950 p-4 w-3/5 xl:w-2/5'>
        <h1 className='text-3xl font-bold text-center block my-2'>Tasks App</h1>
        <TaskProvider>
          <TaskForm />
          <TaskList />
        </TaskProvider>
      </main>
    </div>
  );
}

export default App;
