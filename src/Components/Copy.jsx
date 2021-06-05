import React from "react";
import styles from "./css/Copy.module.css";
import copy from "copy-to-clipboard";

export default function Copy(props) {
  const handleClick = () => {
    copy(props.value);
  };

  return (
    <span className={styles.copy}>
      {props.value}
      <span className="ml-1" onClick={handleClick}>
        <span className={`${styles.toolTip} p-1`}>Copy!</span>
      </span>
    </span>
  );
}
