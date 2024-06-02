import styles from "@/components/ProgressBar/progressBar.module.scss";
import ProgressBarItem from "@/components/ProgressBar/ProgressBarItem/ProgressBarItem";

interface IProgressBarProps {
  step: number;
  maxStep: number;
}

const ProgressBar: React.FC<IProgressBarProps> = ({ step, maxStep }) => {
  return (
    <div className={styles.progressBar}>
      {Array.from({ length: maxStep + 1 }, (_, index) => (
        <ProgressBarItem
          key={index}
          type={index < step ? "done" : index === step ? "current" : "not-done"}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
