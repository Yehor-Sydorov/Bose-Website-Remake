import style from "../../styles/Contacted.module.css";

function ContactData(props) {
  return (
    <div className="">
      <div className="">
        <p className={style.HeadingStyle}>{props.contentHeading}</p>
        <p>{props.contentData}</p>
      </div>
    </div>
  );
}

export default ContactData
