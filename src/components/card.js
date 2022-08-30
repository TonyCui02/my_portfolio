import React from "react";
import styles from "../styles/card.module.css";
import CodeIcon from "@material-ui/icons/Code";

export default function Card(props) {
  return (
    <div className={styles.card}>
      <a href={props.link} target="_blank" rel="noreferrer">
        <img src={props.image} alt="cover"/>
        <div className={styles.text}>
          <h4>{props.title}</h4>
          <p>{props.content}</p>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerItem}>
            <CodeIcon />
            <p>{props.tech}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
