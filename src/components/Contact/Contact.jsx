import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h1>NEXUS</h1>
        <p1>From code to classroom and media mastery, Nexus empowers excellence across the digital landscape, harmonizing software, learning, and media for a holistic journey into the future.</p1>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:myemail@email.com">contact.nexusinfo@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/myname">www.linkedin.com/company/nexus-software-pvt-ltd/</a>
        </li>
        
      </ul>
      <b></b>
      <p>&copy; 2024 NEXUS | All Rights Reserved by Nexus Group </p>
    </footer>

    
  );
};