import styles from "./CancleButton.module.css";

function CancleButton({ onClick }) {
  return (
    <button onClick={onClick} className={styles.cancleButton}>
      Cancle
    </button>
  );
}

export default CancleButton;
