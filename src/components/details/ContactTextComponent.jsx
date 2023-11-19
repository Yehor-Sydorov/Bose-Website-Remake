import style from "../../styles/Contacted.module.css";
import ContactData from "./ContactData";

function ContactTextComponent() {
    let content = (
        <>
        400 first ave. <br/> suite 700 <br/> Minneapolis, MN 55401
        </>
    )
  return (
    <div>
      <ContactData contentHeading="Phone" contentData="+1 234 5555-55-55" />
      <ContactData contentHeading="Email" contentData="hello@miami.com" />
      <ContactData
        contentHeading="Adress"
        contentData={content}
      />
    </div>
  );
}

export default ContactTextComponent;
