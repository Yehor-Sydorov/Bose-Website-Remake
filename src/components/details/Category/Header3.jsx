import style from "./../../../styles/Category.module.css"

function Header3(props) {
    return(
        <div>
            <h3 className={style.Header3}>{props.content}</h3>
        </div>
    )
}

export default Header3