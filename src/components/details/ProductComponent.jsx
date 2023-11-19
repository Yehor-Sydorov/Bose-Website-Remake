import style from "./../../styles/Recommended.module.css";

function ProductComponent(props) {
  return (
    <div className={style.ProductElement}>
      <img src={props.ImageUrl} alt="product photo" width={props.ImageWidth} height={props.ImageHeight} />
      <div className={style.ProductDetails}>
        <h4>{props.ProductText}</h4>
        <p>{props.ProductType}</p>
        <h4>{props.ProductPrice}</h4>
      </div>
    </div>
  );
}

export default ProductComponent;
