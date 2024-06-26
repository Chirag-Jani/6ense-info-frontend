
import PropTypes from "prop-types";

const Button = ({name}) => {
  return (
    <button className="bgBlack  py-2.5 px-4 rounded-full font-semibold capitalize  border-[#5f51ff] hover:bgBlue hover:bg-[#6254ff] textWhite border-[1px] flex justify-center items-center">
      {name}
    </button>
  );
};

Button.propTypes = {
    name:PropTypes.string
};

export default Button;
