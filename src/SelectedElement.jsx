import styles from "./SelectedElement.module.css";

function SelectedElement({ selectedElements = [], onRemoveElement }) {
  return (
    <div className={styles.elementSelection}>
      {selectedElements.map((element, index) => (
        <div key={index} className={styles.element}>
          <p className={styles.fontStyle}>{element}</p>
          <div className={styles.elementStructure}>
            <span className={styles.fontStyle}>|</span>
            <button
              className={styles.closeButton}
              onClick={() => onRemoveElement(element)}
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SelectedElement;
