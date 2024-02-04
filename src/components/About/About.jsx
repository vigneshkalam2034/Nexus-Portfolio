import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Us</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/NexusHero.jpg")}
          alt="Nexus Hero Image"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Technology</h3>
              <p>
              Our solutions accelerate time-to-market, time-to-revenue, and improve customer experience, while enabling in-house teams to stay focused on their core businesses. Monetize data through Artificial Intelligence and Machine Learning to better target customers, accurately analyzing and predicting behaviors in real-time.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Solutions</h3>
              <p>
              Our software solutions help CSPs offer differentiated services to their customers. Additionally, our experts are covering multiple enterprise applications, solutions for smooth digital transformation, including Cloud portfolio, DevOps, AI, and RPA.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Consulting</h3>
              <p>
              Our teams have hands-on experience addressing the most significant issues facing Communication Service Providers (CSPs) today, including Cloud transitions, Machine-to-Machine, over-the-top strategies, and Big Data initiatives.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};