import React from 'react';
import style from './list.module.scss';
import Item from './item';

function List() {
    const tasks = [{
        tarefa: "React",
        tempo: "02:00:00"
    },
    {
        tarefa: "Javascript",
        tempo: "01:00:00"
    }, {
        tarefa: "Typescript",
        tempo: "03:00:00"
    }]
    return (
        <aside className={style.listaTarefa}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((item, index) => (
                    <Item
                        key="index"
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;