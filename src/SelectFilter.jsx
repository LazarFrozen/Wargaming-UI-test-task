import styles from "./SelectFilter.module.css";

function SelectFilter({ onChange, value, options }) {
  return (
    <select
      className={styles.input}
      name="elements"
      onChange={onChange}
      value={value}
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default SelectFilter;
