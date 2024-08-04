import Elements from "./Elements";
import styles from "./ElementTable.module.css";

function ElementTable({ elements, onToggleElement, selectedElements = [] }) {
  const isDisabled = selectedElements.length >= 3;

  return (
    <div className={styles.container}>
      {elements.map((element, index) => (
        <Elements
          key={index}
          index={element}
          onToggle={() => onToggleElement(element)}
          selectedElements={selectedElements.includes(element)}
          isDisabled={!selectedElements.includes(element) && isDisabled}
        />
      ))}
    </div>
  );
}

export default ElementTable;
