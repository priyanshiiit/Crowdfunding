import React from "react";
import NavBar from "../Components/navbar_notLanding";
import Form from "../Components/queryForm";
import ScrollToTop from "../Components/scrollToTop";
import styles from "../Components/styles/contactUs.module.css";

const AboutUs = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <div className={styles.container}>
        <h1 className={styles.header}>CONTACT US</h1>
        <div className={styles.content}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
          consequatur ea quia inventore excepturi officiis deserunt sequi, esse
          nobis laudantium tempora aut, animi praesentium id! Necessitatibus
          laborum vitae vero at!
          <br />
          <br />
          <div className="row">
            <div className={`col-md-8 ${styles.contactUs}`}>
              <h1 className={styles.inheader}>Get In Touch</h1>
              <p className={styles.inpara}>
                Feel free to contact us in case of any queries
              </p>
              <div className={styles.content}>
                <Form />
              </div>
            </div>
            <div className={`col-md-4 ${styles.details}`}>
              <h1 className={styles.inheader}>Our Office</h1>
              <p className={styles.incontent}>
                <b>ROTARACT IIITM</b>
                <br />
                IIITM Campus,
                <br />
                Morena Link Rd,
                <br /> Gwalior, Madhya Pradesh 474015
                <br /> <br />
                For any queries, reach us out at email : rotaract@iiitm.ac.in
                <br />
                +91-9876543210
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
