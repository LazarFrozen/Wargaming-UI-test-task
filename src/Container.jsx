import { useState } from "react";
import styles from "./Container.module.css";
import ContentWindow from "./ContentWindow";
import Header from "./Header";

function Container() {
  const [isOpen, setIsOpen] = useState(false);
  const [savedElements, setSavedElements] = useState([]);

  const options = [
    { value: "no-filter", label: "No Filter" },
    { value: "10", label: ">10" },
    { value: "100", label: ">100" },
    { value: "200", label: ">200" },
  ];

  function handleRemoveElement(elementToRemove) {
    setSavedElements((removeSavedElement) =>
      removeSavedElement.filter((el) => el !== elementToRemove)
    );
  }

  return (
    <section className={styles.containerCenter}>
      <div className={styles.containerStyling}>
        <div className={styles.containerSizing}>
          <Header
            setIsOpen={setIsOpen}
            savedElements={savedElements}
            onRemoveElement={handleRemoveElement}
          />
          {isOpen && (
            <ContentWindow
              setIsOpen={setIsOpen}
              options={options}
              setSavedElements={setSavedElements}
              savedElements={savedElements}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default Container;
