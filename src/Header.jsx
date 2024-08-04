import ButtonChange from "./ButtonChange";
import styles from "./Header.module.css";
import SelectedElement from "./SelectedElement";

function Header({ setIsOpen, savedElements, onRemoveElement }) {
  return (
    <div>
      <h1 className={styles.title}>Select Items</h1>
      <p className={styles.paragraph}>
        You currently have {savedElements.length}{" "}
        {savedElements.length === 1 ? "selected item." : "selected items."}
      </p>
      <div>
        <SelectedElement
          selectedElements={savedElements}
          onRemoveElement={onRemoveElement}
        />
      </div>
      <ButtonChange onClick={() => setIsOpen((show) => !show)} />
    </div>
  );
}

export default Header;
