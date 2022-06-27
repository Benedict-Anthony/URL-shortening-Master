import "../../UI/button.css";
import PropTypes from "prop-types";

function Button({ text, func }) {
  return (
    <div>
      <button onClick={func} className="btn btn-full">
        {text}
      </button>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
