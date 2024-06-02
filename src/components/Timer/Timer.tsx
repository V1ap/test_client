import { useEffect } from "react";
import styles from "@/components/Timer/timer.module.scss";
import { getTimer } from "@/utils/getTimer";
import { useNavigate } from "react-router";
import { useTimerStore } from "@/store/timerStore";

const Timer: React.FC = () => {
  const { timer, setTimer } = useTimerStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (timer < 0) {
      navigate("/final", { replace: true });
      return;
    }
    const timeoutId = setTimeout(() => setTimer(timer - 1), 1000);
    return () => clearTimeout(timeoutId);
  }, [timer, navigate, setTimer]);

  return (
    <div className={styles.timer}>
      <h2 className={styles.timer__header}>Тестирование</h2>
      <span className={styles.timer__time}>{getTimer(timer)}</span>
    </div>
  );
};

export default Timer;
