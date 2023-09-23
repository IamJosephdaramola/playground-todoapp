import PropTypes from 'prop-types';

const Button = ({ text }) => {
    return (
        <button
            type="submit"
            className="bg-todo-blue-3 font-[700] text-[16px] hover:bg-todo-blue-4 py-4 mt-8 text-[#fff] w-[250px] sm:w-[478px]"
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
};
export default Button;
