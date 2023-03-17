import Title from '../component/Title';
import AddTask from '../component/AddTask';
import ListTasks from '../component/ListTasks';
import { useState } from 'react';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  console.log(tasks);

  return (
    <div>
      <div className='addTask'>
        <Title />
        <AddTask setTasks={setTasks} />
      </div>
      <div>
        <ListTasks tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}
