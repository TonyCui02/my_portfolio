import Layout from "../components/layout";
import styles from "../styles/index.module.css";
import Card from "../components/card";
import React from "react";
import LazyLoad from "react-lazyload";
import profile from '../images/profile.svg'
import findClass from '../images/findClass.svg'
import grocer from '../images/grocer.svg'
import nzcsa from '../images/NZCSA.png'
import qualia from '../images/Qualia.png'


export default function Home({ data }) {
  console.log(data);
  return (
    <Layout>
      <section className={styles.profile}>
        <div className={styles.profileText}>
          <h1>Hi, I'm <span className="accent">Tony.</span></h1>
          <p>Aspiring full stack engineer with a passion for art</p>
        </div>
        <div className={styles.imgWrapper}>
          <LazyLoad height={250} once>
            <img src={profile} alt="profile" />
          </LazyLoad>
        </div>
      </section>

      <section className={styles.projects}>
        <div className={styles.sectionHeading}>
          <h2>Projects</h2>
        </div>
        <div className={styles.projectsCards}>
          <Card
            link="https://github.com/UoaWDCC/NZCSA-Frontend"
            title="NZCSA portal"
            content="A webapp allowing members of the NZ Chinese Students association to register and pay for events."
            tech="React, Material-UI, Express, MongoDB, NodeJS"
            image={nzcsa}
          />
          <Card
            link="https://github.com/TonyCui02/qualia"
            title="Qualia"
            content="Mobile app to scan barcodes of foods and make recommendations based on diet."
            tech="React-Native, Firebase, Open Food Facts API"
            image={qualia}
          />
          <Card
            link="https://github.com/TonyCui02/grocer"
            title="Grocer"
            content="Price comparison platform built with web scrapers using python."
            tech="React, Python, CSS"
            image={grocer}
          />
          <Card
            link="https://github.com/TonyCui02/Find_my_class"
            title="Find My Class"
            content="Help students find their way around campus using an interactive 3D model."
            tech="HTML/CSS, JavaScript, Google Sketchup"
            image={findClass}
          />
        </div>
      </section>
    </Layout>
  );
}
