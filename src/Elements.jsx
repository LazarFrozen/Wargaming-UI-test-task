import styles from "./Elements.module.css";

function Elements({ index, onToggle, selectedElements, isDisabled }) {
  return (
    <div className={styles.position}>
      <input
        className={styles.checkBox}
        type="checkbox"
        checked={selectedElements}
        onChange={onToggle}
        disabled={isDisabled}
      />
      <div className={styles.text}>{index}</div>
    </div>
  );
}

export default Elements;
