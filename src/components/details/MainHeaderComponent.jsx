import style from "./../../styles/Recommended.module.css"

function MainHeaderComponent(props) {
  return (
    <div className={style.MainHeaderContainer}>
      <h2
        className={
          props.textStyle == "normal" ? "headerNormal" : "headerItalic"
        }
      >
        {props.headerText}
      </h2>
    </div>
  );
}

export default MainHeaderComponent;
