import React from "react";
import styles from "./css/Image.module.css";

export default function Image() {
  return (
    <div className="col-3 pt-3 pb-3" style={{minHeight:"150px", textAlign:"-webkit-center"}}>
      <div className={styles.Image}></div>
    </div>
  );
}
