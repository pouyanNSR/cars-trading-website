import { TollRounded } from "@mui/icons-material";
import styles from "./styles/OutlineFocusInput.module.css";
import { useContext } from "react";
import MainContext from "../context"

const OutlineFocusInput = ({section,placeholder}) => {
  const {mode} = useContext(MainContext)
  return (
    <>
      <input
        style={{color: mode === "light" ? "var(--text-dark-color)" : "var(--text-light-color)",
          backgroundColor: mode === "light" ? "var(--light-background)" : "var(--dark-background)",
        }}
        id = {section ? styles[`search-box__${section}`] : null}
        className={`${styles["search-box__input"]} ${styles["outline-focus-style"]} ${mode === "dark" ? styles["light-placeholder"] : null}`}
        type="text"
        placeholder={section ? placeholder : null}
        autoComplete="off"
      />
      <span className={`${styles["bottom"]} ${styles["input__span"]}`}></span>
      <span className={`${styles["right"]} ${styles["input__span"]}`}></span>
      <span className={`${styles["top"]} ${styles["input__span"]}`}></span>
      <span className={`${styles["left"]} ${styles["input__span"]}`}></span>
      {section==="price-input" && (
        <TollRounded sx={{ color: mode === "light" ? "green" : "text.main"}}  className={styles["search-box__input-icon"]} />
      )}
    </>
  );
};

export default OutlineFocusInput;
