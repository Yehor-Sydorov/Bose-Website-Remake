import TitleComponent from "../details/TitleComponent";
import style from "../../styles/Contacted.module.css";
import FormsComponent from "../details/FormsComponent";
import ContactTextComponent from "../details/ContactTextComponent";
import style2 from "../../styles/Irrelevant.module.css"
import { useState } from "react";

function ContactComponent() {
  return (
    <div className={style.MainContactContainer} id="Contacts">
      <div className={style.ContactText}>
        <TitleComponent content="Contact us" />
      </div>
      <div className={style.ContactContainer}>
        <FormsComponent />
        <ContactTextComponent />
      </div>
    </div>
  );
}

export default ContactComponent;
