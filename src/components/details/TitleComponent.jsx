import style from "./../../styles/Category.module.css"

function TitleComponent(props) {
    return(
        <div>
            <h2 className={style.Header2}>{props.content}</h2>
        </div>
    )
}

export default TitleComponent