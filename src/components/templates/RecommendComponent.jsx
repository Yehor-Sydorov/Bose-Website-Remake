import TitleComponent from "../details/TitleComponent";
import ProductComponent from "../details/ProductComponent";
import style from "./../../styles/Recommended.module.css";

function RecommendComponent() {

  return (
    <div className={style.RecommendedContainer} id="Recommended">
      <TitleComponent content="Recommended"/>
      <div className={style.ProductsContainer}>
        <ProductComponent
          ImageUrl="https://content1.rozetka.com.ua/goods/images/big/22266481.jpg"
          ImageWidth="150"
          ImageHeight="324"
          ProductText="Bose portable Smart speaker"
          ProductType="Smart home"
          ProductPrice="129.00$"
        />
        <ProductComponent
          ImageUrl="https://content.rozetka.com.ua/goods/images/big/318250056.png"
          ImageWidth="320"
          ImageHeight="324"
          ProductText="SoundLink Flex Bluetooth speaker"
          ProductType="Portable bluetooth"
          ProductPrice="149.00$"
        />
        <ProductComponent
          ImageUrl="https://hotline.ua/img/tx/401/4012406925.jpg"
          ImageWidth="320"
          ImageHeight="324"
          ProductText="SoundLink Color Bluetooth speaker II"
          ProductType="Portable bluetooth"
          ProductPrice="339.00$"
        />
      </div>
    </div>
  );
}

export default RecommendComponent;
