import React from 'react';
import style from './list.module.scss';

function List() {
    const tasks = [{
        tarefa: "React",
        tempo: "02:00:00"
    },
    {
        tarefa: "Javascript",
        tempo: "01:00:00"
    },{
        tarefa: "Typescript",
        tempo: "03:00:00"
    }]
    return (
        <aside className={style.listaTarefa}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((item, index) => (
                    <li key={index} className={style.item}>
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default List;