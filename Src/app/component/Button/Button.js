import cn from "classnames";
import styles from "./Button.module.css";

const HMButton = ({ text, className, onClick }) => {
  return (
    <button
      type="button"
      className={cn(styles.button, className)}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default HMButton;
