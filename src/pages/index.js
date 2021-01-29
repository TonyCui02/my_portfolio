import Layout from "../components/layout";
import styles from "../styles/index.module.css";
import Card from "../components/card";
import React from "react";
import LazyLoad from "react-lazyload";
import profile from '../images/profile.svg'

export default function Home({ data }) {
  console.log(data);
  return (
    <Layout>
      <section className={styles.profile}>
        <div className={styles.profileText}>
          <h1>Hi, I'm <span className="accent">Tony.</span></h1>
          <p>Aspiring full stack engineer and UX designer</p>
        </div>
        <div className={styles.imgWrapper}>
          <LazyLoad height={250} once>
            <img src={profile} alt="profile" />
          </LazyLoad>
        </div>
      </section>

      <section className={styles.projects}>
        <div className={styles.sectionHeading}>
          <h2>My Personal Projects</h2>
        </div>
        <div className={styles.projectsCards}>
          <Card
            link="https://github.com/TonyCui02/grocer"
            title="find my class"
            content="a webapp for university students for find their way around campus"
            tech="HTML, CSS, JS"
            image="./findClass.svg"
          />
          <Card
            link="https://github.com/TonyCui02/grocer"
            title="grocer"
            content="price comparison platform built with web scrapers using python"
            tech="React, Python, CSS"
            image="./grocer.svg"
          />
        </div>
      </section>
    </Layout>
  );
}
