/* Library Imports */
//React
import React, { useState, useRef } from "react";

/* Stylesheet Imports */
import styles from "./ContactForm.module.scss";

/* Image Imports */

/* Component Imports */
import ColorChangeBorderSquare from "@/components/clickables/colorChangeBorderSquare/ColorChangeBorderSquare";
import ReCAPTCHA from "react-google-recaptcha";

/* Module Imports */
import { submitMessage } from "@/modules/firebase";

/* Component Interfaces */
interface Props {
  width?: "standard" | "nearFull";
  textColor: "light" | "dark";
  headerAlignment: "left" | "center" | "right";
  header?: string;
  leadingParagraph?: string;
}

/* Component */
const ContactForm: React.FC<Props> = ({
  width,
  textColor,
  headerAlignment,
  header,
  leadingParagraph,
}) => {
  /* State Variables */
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [displayBox, setDisplayBox] = useState<boolean>(false);
  //Ref
  const recaptcha: any = useRef(null);
  /* End State Variables */

  /* Render Variables */
  const widthRef = {
    standard: "standardContainer",
    nearFull: "wideContainer",
  };
  /* End Render Variables */

  /* Functions */

  const handleSubmit = async () => {
    let captVal: any = await recaptcha.current.getValue();
    if (!captVal) {
      alert("Please verify you are not a robot.");
    }
    if (captVal) {
      const action = await submitMessage("messages", name, email, message);
      if (action.type === "document") {
        setDisplayBox(true);
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => {
          setDisplayBox(false);
        }, 3000);
      }
    }
  };
  /* End Functions */

  /* Effects */
  /* End Effects */

  /* Component Return Statement */
  return (
    <div className={`${styles.ContactForm} ${width ? widthRef[width] : null}`}>
      {displayBox ? (
        <div className={`${styles.messageBox} raisedWhiteCardNoHover`}>
          <h2 className="dark center primary">Thank you!</h2>
          <p className="dark center">I&apos;ll be in touch soon!</p>
        </div>
      ) : null}
      <h1 className={`primary ${textColor} ${headerAlignment}`}>
        {header ? header : "Contact Me"}
      </h1>
      <div className={styles.paragraphContainer}>
        <p className={`${styles.leadingParagraph} ${textColor}`}>
          {leadingParagraph}
        </p>
      </div>
      <form className={styles.form}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className="whiteOutlineInput"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="whiteOutlineInput"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          className="whiteOutlineInput"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <ColorChangeBorderSquare
          text="Submit"
          type="button"
          buttonColor="mvs-red"
          action={handleSubmit}
        />
        <div className={styles.capBox}>
          <ReCAPTCHA
            ref={recaptcha}
            sitekey={String(process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY)}
          />
        </div>
      </form>
    </div>
  );
};

/* Export Statement */
export default ContactForm;
