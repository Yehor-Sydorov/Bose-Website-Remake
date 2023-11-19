import TitleComponent from "../details/TitleComponent";
import style from "./../../styles/Why.module.css"

function BenefitsComponent() {
  let content = (
    <>
      Why buy direct
      <br />
      from Bose
    </>
  );
  return (
    <div className={style.BenefitsContainer} id="Why">
      <div className={style.TitleText}>
        <TitleComponent content={content}/>
      </div>
      <div className={style.TextContainer}>
        <div>
          <p className={style.BenefitsText}>Free 2-day shipping and returns</p>
          <p className={style.BenefitsText}>90-day risk free trial</p>
          <p className={style.BenefitsText}>World class customer service</p>
          <p className={style.BenefitsText}>My Bose account management</p>
        </div>
        <div>
          <p className={style.DescriptionText}>
            A great product is more than what’s in the box. It’s a promise of
            premium performance, world-class support, and everything you expect
            from a trusted brand. It’s just one of many reasons why you’ll shop
            with confidence on Bose.com.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BenefitsComponent;
