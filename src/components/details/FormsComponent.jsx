import style from "../../styles/Contacted.module.css";
import { useState } from "react";
import Irrelevant from "./Category/irrelevant/irrelevantComponent";

function FormsComponent() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  return (
    <div className={style.FormsContainer}>
      <input
        type="text"
        placeholder="Name"
        value={nameValue}
        onChange={(event) => setNameValue(event.target.value)}
        className={style.FormsInput}
      />
      <input
        type="text"
        placeholder="Email"
        value={emailValue}
        onChange={(event) => setEmailValue(event.target.value)}
        className={style.FormsInput}
      />
      <input
        type="text"
        placeholder="Message"
        value={messageValue}
        onChange={(event) => setMessageValue(event.target.value)}
        className={style.FormsInput2}
      />
      <button className={style.FormsButton}>Send</button>
      <Irrelevant/>
    </div>
  );
}

export default FormsComponent