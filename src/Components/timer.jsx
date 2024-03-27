import { useEffect, useState } from "react";
import styles from "../Styles/timer.module.css";

const Timer = () => {
    const [time, setTime] = useState(0);
    const [startTime, setStartTimer] = useState(false);
    const [timeId, setTimeId] = useState("");

    const startStopTimerfunc = () => {
        if (startTime) {
            clearInterval(timeId);
            setStartTimer(false);
        } else {
            let id = setInterval(() => {
                setTime((el) => {
                    if (el == 10) {
                        clearInterval(id);
                        return 10;
                    } else {
                        return el + 1;
                    }
                });
            }, 1000);
            setTimeId(id);
            setStartTimer(true)
        }
    }

    const resetTimer = () => {
        clearInterval(timeId);
        setTime(0);
        setStartTimer(false);
    }

    return (
        <div className={styles.timer_div}>
            <p>{time}</p>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <button style={{background:time == 10 ? "red":null}} onClick={() => startStopTimerfunc()} >{startTime ? "Stop" : "Start"}</button>
                <button onClick={() => resetTimer()}>Reset</button>
            </div>
        </div>
    )
}

export default Timer;