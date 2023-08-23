import React, { useState } from 'react';
import Form from '../components/form';
import List from '../components/list';
import style from './App.module.scss';
import StopWatch from '../components/stopwatch';
import { ITask } from '../types/task';

function App() {
  const [tasks, setTarefas] = useState<ITask[] | []>([]);

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List tasks={tasks} />
      <StopWatch />
    </div>
  );
}

export default App;
