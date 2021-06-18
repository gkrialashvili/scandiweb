import middleLogo from "../assets/images/middle.svg";
import dollarSign from "../assets/images/dollar.svg";
import cartSign from "../assets/images/cart.svg";

export default function HistoryModal() {
  return (
    <div className="headerMainContainer">
      <div className="headerLeftCategory">
        <div className="active">WOMEN</div>
        <div>MEN</div>
        <div>KIDS</div>
      </div>
      <img src={middleLogo} alt=""></img>
      <div className="rightHeaderItems">
        <div className="itemsContainer">
          <img
            className="dollar-arrow"
            id="dollar"
            src={dollarSign}
            alt=""
          ></img>
          <div className="cartContainer">
            <img className="dollar-arrow" id="cart" src={cartSign} alt=""></img>
            <div id="cartCounter">2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

let menuItem;
setTimeout(function () {
  menuItem = document.getElementsByName(".headerLeftCategory div");
  console.log(menuItem);
}, 1000);
