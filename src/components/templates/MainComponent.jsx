import MainHeaderComponent from "../details/MainHeaderComponent";
import style from "../../styles/Menu.module.css";
import menu from "../../assets/pictures/menu.jpg";
import menuLogo from "../../assets/pictures/menuLogo.png";
import Phone from "../../assets/pictures/menuPhone.png";
import BurgerHover from "../../assets/pictures/burgerHover3.png";
import Burger from "../../assets/pictures/menuBurger3.png";
import MenuIcon from "../../assets/pictures/MenuIcon.png";
import { useState } from "react";

function MainComponent() {
  const [buttonHover, setButtonHover] = useState(true);
  const [numberVisible, setNumberVisible] = useState(false);
  const [menuOnScreen, setMenuOnScreen] = useState(false);
  let content = (
    <>
      The world shades.
      <br />
      Your music shines.
    </>
  );
  return (
    <div className="" id="Home">
      <div className={menuOnScreen ? style.SideMenuVisible : style.SideMenu}>
        <p className={style.menuParagraph}><a href="#Home" className={style.menuLink}>HOME</a></p>
        <p className={style.menuParagraph}><a href="#Recommended" className={style.menuLink}>RECOMMENDED</a></p>
        <p className={style.menuParagraph}><a href="#Categories" className={style.menuLink}>CATEGORIES</a></p>
        <p className={style.menuParagraph}><a href="#Why" className={style.menuLink}>WHY BUY</a></p>
        <p className={style.menuParagraph}><a href="#Contacts" className={style.menuLink}>CONTACTS</a></p>
        <p className={style.menuParagraph2}>+1 234 5555-55-55</p>
        <p className={style.menuParagraph3}>CALL TO ORDER</p>
      </div>
      <div
        className={style.MainContainer}
      >
        <div className={style.MenuIconsContainer}>
          <div className="">
            <img
              src={menuLogo}
              className={style.menuLogo}
              width={190}
              height={24}
            />
          </div>
          <div className={style.PhoneAndBurgerContainer}>
            <div className={style.phoneNumberContainer}>
              <div
                className={
                  numberVisible
                    ? style.phoneNumber
                    : style.phoneNumberNotVisible
                }
              >
                +1 234 555-55-55
              </div>
              <img
                src={Phone}
                className={style.menuPhone}
                width={32}
                height={32}
                onMouseEnter={() => {
                  setNumberVisible(true);
                }}
                onMouseLeave={() => {
                  setNumberVisible(false);
                }}
              />
            </div>
            <div className="">
              <img
                src={buttonHover ? Burger : BurgerHover}
                className={style.menuBurger}
                width={32}
                height={32}
                onMouseEnter={() => {
                  setButtonHover(false);
                }}
                onMouseLeave={() => {
                  setButtonHover(true);
                }}
                onClick={() => {
                  setMenuOnScreen(!menuOnScreen);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={style.menuIconAndTextContainer}>
        <div>
          <img src={MenuIcon} />
        </div>
        <div className={style.MenuFancyText}>
          <MainHeaderComponent headerText={content} />
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
