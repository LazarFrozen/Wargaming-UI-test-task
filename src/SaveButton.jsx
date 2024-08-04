import styles from "./SaveButton.module.css";

function SaveButton({ onClick }) {
  return (
    <button className={styles.saveButton} onClick={onClick}>
      Save
    </button>
  );
}

export default SaveButton;
