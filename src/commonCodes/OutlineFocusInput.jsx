import styles from "./styles/OutlineFocusInput.module.css";

const OutlineFocusInput = ({section,placeholder}) => {
  return (
    <>
      <input
        id = {section ? styles[`search-box__${section}`] : null}
        className={`${styles["search-box__input"]} ${styles["outline-focus-style"]}`}
        type="text"
        placeholder={section ? placeholder : null}
        autoComplete="off"
      />
      <span className={`${styles["bottom"]} ${styles["input__span"]}`}></span>
      <span className={`${styles["right"]} ${styles["input__span"]}`}></span>
      <span className={`${styles["top"]} ${styles["input__span"]}`}></span>
      <span className={`${styles["left"]} ${styles["input__span"]}`}></span>
    </>
  );
};

export default OutlineFocusInput;
