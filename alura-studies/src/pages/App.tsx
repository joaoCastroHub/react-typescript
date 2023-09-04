import React, { useState } from 'react';
import Form from '../components/form';
import List from '../components/list';
import style from './App.module.scss';
import StopWatch from '../components/stopwatch';
import { ITask } from '../types/task';

function App() {
  const [tasks, setTarefas] = useState<ITask[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelecionado(selectedTask);
    setTarefas(lastTask => lastTask.map(task => ({
      ...task,
      selecionado: task.id === selectedTask.id ? true : false
    })))
  }

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List
        tasks={tasks}
        selectTask={selectTask}
      />
      <StopWatch />
    </div>
  );
}

export default App;
