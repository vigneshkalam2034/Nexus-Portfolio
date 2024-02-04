import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Nexus Info</h1>
        <p className={styles.description}>
        Transform your business digitally with our cutting-edge solutions, tailored to boost your online presence and drive unparalleled success. Step into a world where technology meets progress, and let Nexus Info be your partner in achieving new heights of digital growth.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Us
        </a>
      </div>
      <img
        src={getImageUrl("about/NexusInfoLogo.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};