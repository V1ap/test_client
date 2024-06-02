import { Checkbox } from "antd";
import styles from "@/styles/answer.module.scss";
import { useAnswersStore } from "@/store/answersStore";

interface IMultiAnswerProps {
  question: string;
  answers: string[];
}

const MultiAnswer: React.FC<IMultiAnswerProps> = ({ question, answers }) => {
  const { currentAnswer, setCurrentAnswer } = useAnswersStore();
  const onChange = (checkedValues: string[]) => {
    setCurrentAnswer(checkedValues.join(", "));
  };

  return (
    <div className={styles.answer}>
      <p className={styles.answer__question}>{question}</p>
      <Checkbox.Group
        value={currentAnswer.split(", ").filter((answers) => answers !== "")}
        onChange={onChange}
        className={styles.answer__answers}
      >
        {answers.map((answer, index) => (
          <Checkbox key={index} value={answer}>
            {answer}
          </Checkbox>
        ))}
      </Checkbox.Group>
    </div>
  );
};

export default MultiAnswer;
