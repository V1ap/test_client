import { Input } from "antd";
import styles from "@/styles/answer.module.scss";
import { useAnswersStore } from "@/store/answersStore";
interface IShortAnswerProps {
  question: string;
}

const ShortAnswer: React.FC<IShortAnswerProps> = ({ question }) => {
  const { currentAnswer, setCurrentAnswer } = useAnswersStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentAnswer(event.target.value);
  };
  return (
    <div className={styles.answer}>
      <p className={styles.answer__question}>{question}</p>
      <Input
        value={currentAnswer}
        onChange={handleChange}
        placeholder="Короткий ответ"
        className={styles.answer__input}
      />
    </div>
  );
};

export default ShortAnswer;
