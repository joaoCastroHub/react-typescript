import Button from "../button";
import style from "./stopwatch.module.scss";
import Watch from "./watch";

function StopWatch() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Watch />
            </div>
            <Button>Começar</Button>
        </div>
    )
}

export default StopWatch;