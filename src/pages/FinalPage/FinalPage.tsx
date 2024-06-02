import { startTimer } from "@/consts/timer";
import styles from "@/pages/FinalPage/finalPage.module.scss";
import { useAnswersStore } from "@/store/answersStore";
import { useQurstionsStore } from "@/store/questionsStore";
import { useTimerStore } from "@/store/timerStore";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const FinalPage = () => {
  const { questions, setCurrentQuestion } = useQurstionsStore();
  const { answers, setAnswers } = useAnswersStore();
  const { setTimer } = useTimerStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (answers.length === 0) {
      setAnswers(JSON.parse(localStorage.getItem("answers") || "[]"));
    } else {
      localStorage.removeItem("savedData");
      localStorage.setItem("answers", JSON.stringify(answers));
    }
  }, []);

  const redirect = () => {
    setAnswers([]);
    setCurrentQuestion(questions[0]);
    setTimer(startTimer);
    navigate("/", { replace: true });
  };

  return (
    <section>
      <h1 className={styles.finalPage__header}>Тест завершен</h1>
      <ul className={styles.finalPage__list}>
        {questions.map((q, i) => (
          <li key={q.id} className={styles.finalPage__item}>
            {q.question} - {answers[i] || <span>{"нет ответа"}</span>}
          </li>
        ))}
      </ul>
      <button className={styles.finalPage__btn} onClick={redirect}>
        Пройти еще раз
      </button>
    </section>
  );
};

export default FinalPage;
