import { useEffect, useState } from "react";
import CancleButton from "./CancleButton";
import styles from "./ContentWindow.module.css";
import ElementTable from "./ElementTable";
import SaveButton from "./SaveButton";
import SelectedElement from "./SelectedElement";
import SelectFilter from "./SelectFilter";

function ContentWindow({
  setIsOpen,
  options,
  setSavedElements,
  savedElements,
}) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("no-filter");
  const [selectedElements, setSelectedElements] = useState(savedElements || []);

  const elements = [];
  for (let i = 1; i <= 300; i++) {
    elements.push(`Element ${i}`);
  }

  useEffect(() => {
    setSelectedElements(savedElements);
  }, [savedElements]);

  function handleOnSearch(value) {
    setSearch(value);
  }

  function handleOnFilter(value) {
    setFilter(value);
  }

  function handleOnSave() {
    setSavedElements(selectedElements);
    setIsOpen(false);
  }

  function handleToggleElement(element) {
    setSelectedElements((prevSelectedElements) =>
      prevSelectedElements.includes(element)
        ? prevSelectedElements.filter((el) => el !== element)
        : [...prevSelectedElements, element]
    );
  }

  function handleRemoveElement(element) {
    setSelectedElements((prevSelectedElements) =>
      prevSelectedElements.filter((el) => el !== element)
    );
  }

  const filteredAndSearchedElements = elements.filter((el) => {
    const index = Number(el.split(" ")[1]);
    if (filter === "10" && index > 10) return false;
    if (filter === "100" && index > 100) return false;
    if (filter === "200" && index > 200) return false;
    return el.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className={styles.window}>
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <h3 className={styles.textStyling}>Select items</h3>
          <button className={styles.close} onClick={() => setIsOpen(false)}>
            X
          </button>
        </div>
        <div className={styles.searchStyling}>
          <div className={styles.searchFlex}>
            <p className={styles.textStyling}>Search</p>
            <input
              className={styles.input}
              type="text"
              value={search}
              onChange={(e) => handleOnSearch(e.target.value)}
            />
          </div>
          <div className={styles.searchFlex}>
            <p className={styles.textStyling}>Filter</p>
            <SelectFilter
              value={filter}
              options={options}
              onChange={(e) => handleOnFilter(e.target.value)}
            />
          </div>
        </div>
        <ElementTable
          elements={filteredAndSearchedElements}
          onToggleElement={handleToggleElement}
          selectedElements={selectedElements}
        />
        <div className={styles.marginTop}>
          <p className={styles.textStyling}>Current selected items:</p>
          <SelectedElement
            selectedElements={selectedElements}
            onRemoveElement={handleRemoveElement}
          />
        </div>
        <div className={styles.buttons}>
          <SaveButton onClick={handleOnSave} />
          <CancleButton onClick={() => setIsOpen(false)} />
        </div>
      </div>
    </div>
  );
}

export default ContentWindow;
