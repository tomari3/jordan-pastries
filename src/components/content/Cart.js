import PropTypes from "prop-types";

const Cart = ({ show }) => {
  return (
    <div className={`cart-wrapper ${show}`}>
      {show ? <div className="cart_header"></div> : null}
    </div>
  );
};
Cart.propTypes = {
  show: PropTypes.string.isRequired,
};
export { Cart };
