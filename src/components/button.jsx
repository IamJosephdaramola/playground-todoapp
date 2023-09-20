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
<<<<<<< HEAD
    text: PropTypes.func.isRequired,
=======
    text: PropTypes.string.isRequired,
>>>>>>> 593acf49092be174e4a1b4cf0949c509e27d4a05
};
export default Button;
