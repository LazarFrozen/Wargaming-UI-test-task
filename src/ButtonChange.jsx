import styles from "./ButtonChange.module.css";

function ButtonChange({ onClick }) {
  return (
    <button className={styles.buttonChange} onClick={onClick}>
      Change my choice
    </button>
  );
}

export default ButtonChange;
