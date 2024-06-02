import TextArea from "antd/es/input/TextArea";
import styles from "@/styles/answer.module.scss";
import { useAnswersStore } from "@/store/answersStore";

interface IExpandedAnswerProps {
  question: string;
}

const ExpandedAnswer: React.FC<IExpandedAnswerProps> = ({ question }) => {
  const { currentAnswer, setCurrentAnswer } = useAnswersStore();

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentAnswer(event.target.value);
  };

  return (
    <div className={styles.answer}>
      <p className={styles.answer__question}>{question}</p>
      <TextArea
        rows={4}
        placeholder="Развернутый ответ"
        value={currentAnswer}
        onChange={handleChange}
        className={styles.answer__input}
      />
    </div>
  );
};

export default ExpandedAnswer;
