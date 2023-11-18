import { useEffect, useState } from "react";
import { TempoParaSegundos } from "../../common/utils/time";
import { ITask } from "../../types/task";
import Button from "../button";
import style from "./stopwatch.module.scss";
import Watch from "./watch";

interface Props {
    selecionado: ITask | undefined,
    finalizarTarefa: () => void
}

function StopWatch({ selecionado, finalizarTarefa }: Props) {
    const [tempo, setTempo] = useState<number>();
    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(TempoParaSegundos(selecionado.tempo));
        }
    }, [selecionado])

    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
            finalizarTarefa();
        }, 1000);
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Watch tempo={tempo} />
            </div>
            <Button onClick={() => regressiva(tempo)}>Começar</Button>
        </div>
    )
}

export default StopWatch;