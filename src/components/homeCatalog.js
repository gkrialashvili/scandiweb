import CatalogItems from "./CatalogItems";

export default function HistoryModal(props) {
  return (
    <div className="homeMainContainer main-container padding">
      <div className="homeTitle">
        <h2>Category Name</h2>
      </div>
      <div className="catalogItemsMain">
        <CatalogItems data={props} />
        <CatalogItems data={props} />
        <CatalogItems data={props} />
        <CatalogItems data={props} />
        <CatalogItems data={props} />
      </div>
    </div>
  );
}
