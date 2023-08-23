import style from './list.module.scss';
import Item from './item';
import { ITask } from '../../types/task';

function List({tasks}:{tasks: ITask[]}) {
    return (
        <aside className={style.listaTarefa}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((item, index) => (
                    <Item
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;