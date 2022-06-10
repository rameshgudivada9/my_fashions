// import "./ProductCard.css";
export const ProductCard = ({ props }) => {
  const {
    image_url,
    name,
    price,
    strikedoffprice,
    brandName,
    category
  } = props;
  return (
    <div className="product-card">
      <img src={image_url} alt="immg"/>

      <div className="field">
        <div className="title">Name:-</div>
        <div>{name}</div>
      </div>
      <div className="field">
        <div className="title">price:-</div>
        <div>₹{price}</div>
      </div>
      <div className="field">
        <div className="title">strikedoffprice:-</div>
        <div>₹{strikedoffprice}</div>
      </div>
      <div className="field">
        <div className="title">brandName:-</div>
        <div> {brandName}</div>
      </div>
      <div className="field">
        <div className="title">category:-</div>
        <div>{category}</div>
      </div>
    </div>
  );
};