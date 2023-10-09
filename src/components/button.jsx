import PropTypes from 'prop-types';

const Button = ({ text, disabled }) => {
    return (
        <button
            disabled={disabled}
            type="submit"
            className="bg-todo-blue-3 font-[700] text-[16px] hover:bg-todo-blue-4 py-4 mt-8 text-[#fff] w-[250px] sm:w-[478px] disabled:opacity-20"
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool
};

Button.defaultProps = {
    disabled: false
}

export default Button;
