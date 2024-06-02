import { Radio, RadioChangeEvent } from "antd";
import styles from "@/styles/answer.module.scss";
import { useAnswersStore } from "@/store/answersStore";

interface IOneAnswerProps {
  question: string;
  answers: string[];
}

const OneAnswer: React.FC<IOneAnswerProps> = ({ question, answers }) => {
  const { currentAnswer, setCurrentAnswer } = useAnswersStore();
  const changeRadioHandler = (event: RadioChangeEvent) =>
    setCurrentAnswer(event.target.value);

  return (
    <div className={styles.answer}>
      <p className={styles.answer__question}>{question}</p>
      <Radio.Group
        value={currentAnswer}
        onChange={changeRadioHandler}
        className={styles.answer__answers}
      >
        {answers.map((answer, index) => (
          <Radio key={index} value={answer}>
            {answer}
          </Radio>
        ))}
      </Radio.Group>
    </div>
  );
};

export default OneAnswer;
