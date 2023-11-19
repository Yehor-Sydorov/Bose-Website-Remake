import imageG from "./../../assets/pictures/7.jpg"
import style from "../../styles/Foot.module.css"

function FooterComponent() {
    return (
        <div>
            <img src={imageG} width={1265} className={style.FooterImage}/>
        </div>
    )
}

export default FooterComponent