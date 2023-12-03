import style from "./../../../styles/Category.module.css"
import Header3 from "./Header3"

function CategoryComponent(props) {
    return(
        <div className={style.CategoryContainer}>
            <div className={style.CategoryInnerContainer}>
                <div className={style.ContainerImageA}><img src={props.imageA} alt="image1" className={style.imageA} /></div>
                <img src={props.imageB} alt="image2" className={style.imageB}/>
            </div>
            <Header3 content={props.header3content}/>
        </div>
    )
}

export default CategoryComponent