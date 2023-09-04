import style from './list.module.scss';
import Item from './item';
import { ITask } from '../../types/task';

interface Props {
    tasks: ITask[],
    selectTask: (task: ITask) => void
}

function List({ tasks, selectTask }: Props) {
    return (
        <aside className={style.listaTarefa}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map(item => (
                    <Item
                        selectTask={selectTask}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;