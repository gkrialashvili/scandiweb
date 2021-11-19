import CatalogItems from "./CatalogItems";

export default function HistoryModal() {
  return (
    <div className="homeMainContainer main-container padding">
      <div className="homeTitle">
        <h2>Category Name</h2>
      </div>
      <div className="catalogItemsMain">
        <CatalogItems />
        <CatalogItems />
        <CatalogItems />
        <CatalogItems />
        <CatalogItems />
      </div>
    </div>
  );
}
