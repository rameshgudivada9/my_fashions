import "./productCard.css";
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
    <div className="main">
    <div className="product-card">
      <img src={image_url} alt="immg"/>

      <div className="field-div">
        <div><h3>{name}</h3></div>
      </div>
      <div className="field-div">
        <div><h4>₹{price}</h4></div>
     
        <div className="strickedprice"><h4>₹{strikedoffprice}</h4></div>
      </div>
      <div className="field-div">
        <div> <h3>{brandName}</h3></div>
      </div>
      <div className="field-div">
        <div><h4>{category}</h4></div>
      </div>
      <div>
        <button>ADD TO CART</button>
      </div>
    </div>
    </div>
  );
};