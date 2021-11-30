import cartImg from "../assets/images/catalog1.png";

export default function CatalogItems(props) {
  console.log(props + "esaaa");
  return (
    <div className="catalogItemsMain_itemConteiner">
      <div className="catalogItemsMain_itemConteiner_imgContainer">
        <img
          src={cartImg}
          className="catalogItemsMain_itemConteiner_img"
          alt=""
        />
        <div className="outOfStock">OUT OF STOCK</div>
      </div>
      <div className="catalogItemsMain_itemConteiner_text">
        Apollo Running Short
      </div>
      <div className="catalogItemsMain_itemConteiner_text">$50.00</div>
    </div>
  );
}
