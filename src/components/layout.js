import React from "react";
import { Link } from "gatsby";
import styles from "../styles/layout.module.css";
import useDarkMode from "use-dark-mode";
import SEO from "../components/seo";

//material ui
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const ListLink = (props) => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default function Layout({ children }) {
  const darkMode = useDarkMode(false);

  return (
    <div style={{ margin: `2rem auto`, maxWidth: 960, padding: `0 1rem` }}>
      <SEO title="Main" description="Projects I've built" />
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <Link to="/">
            <h3>Tony</h3>
          </Link>
          <ul>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
          </ul>
        </div>
        <div clasName={styles.headerRight}>
          <button onClick={darkMode.toggle} className="iconButton">
            {darkMode.value ? (
              <WbSunnyIcon className="icon" fontSize="medium" />
            ) : (
              <Brightness2Icon className="icon" fontSize="medium" />
            )}
          </button>
        </div>
      </header>
      {children}
      <footer className={styles.footer}>
        <div>
          <p>Tony Cui © {new Date().getFullYear()}</p>
        </div>
        <div>
          <Link to="/">
            <p>Home</p>
          </Link>
        </div>
        <div className={styles.footerIcons}>
          <a
            className="iconButton"
            href="https://github.com/TonyCui02"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className="icon" fontSize="medium" />
          </a>
          <a
            className="iconButton"
            href="https://linkedin.com/in/tonycui02"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className="icon" fontSize="large" />
          </a>
        </div>
      </footer>
    </div>
  );
}
