import style from "./../../styles/Category.module.css";
import CategoryComponent from "../details/Category/CategoryComponent";
import ImageA from "./../../assets/pictures/1.jpg";
import ImageB from "./../../assets/pictures/2.jpg";
import ImageC from "./../../assets/pictures/3.jpg";
import ImageD from "./../../assets/pictures/4.jpg";
import ImageE from "./../../assets/pictures/5.jpg";
import ImageF from "./../../assets/pictures/6.jpg";

function BrowseComponent() {
  let content =  (
    <>
      Browse Bose<br />
      products by category
    </>
  );
  return (
    <div className={style.BrowseComponentContainer} id="Categories">
      <h2 className={style.BrowseText}>{content}</h2>
      <CategoryComponent
        imageA={ImageA}
        imageB={ImageB}
        header3content="Headphones & earbuds"
      />
      <CategoryComponent
        imageA={ImageC}
        imageB={ImageD}
        header3content="Speakers"
      />
      <CategoryComponent
        imageA={ImageE}
        imageB={ImageF}
        header3content="Audio sunglasses"
      />
      <div className={style.ButtonContainer}>
        <button className={style.ButtonElement}>View all</button>
      </div>
    </div>
  );
}

export default BrowseComponent;
