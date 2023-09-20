<<<<<<< HEAD
import PropTypes from 'prop-types';

const FormInput = ({ label, name, placeholder, className }) => {
    return (
        <div className={className}>
            <div className="grid justify-center sm:justify-start pt-4 ">
                <label className="text-[16px] font-[500] text-[#020202]">
                    {label}
                </label>
                <input
                    type="text"
                    name={name}
                    placeholder={placeholder}
                    className="border-2 placeholder:pl-3 py-2 w-[250px] sm:w-[478px] outline-none rounded-[4px]"
=======
import { useId } from 'react';
import PropTypes from 'prop-types';

const FormInput = ({ label, name, placeholder, className, isRequired, onChange, type }) => {
    const id = useId();

    return (
        <div className={className}>
            <div className="grid justify-center sm:justify-start pt-4 ">
                <label htmlFor={id} className="text-[16px] font-[500] text-[#020202]">
                    {label}
                </label>
                <input
                    id={id}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    className="border-2 placeholder:pl-3 py-2 w-[250px] sm:w-[478px] outline-none rounded-[4px]"
                    required={isRequired}
                    onChange={onChange}
>>>>>>> 593acf49092be174e4a1b4cf0949c509e27d4a05
                />
            </div>
        </div>
    );
};
FormInput.propTypes = {
<<<<<<< HEAD
    label: PropTypes.func.isRequired,
    name: PropTypes.func.isRequired,
    placeholder: PropTypes.func.isRequired,
    className: PropTypes.func.isRequired,
};
=======
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    isRequired: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    type: PropTypes.string,
};

FormInput.defaultProps = { className: "", type: "text" }

>>>>>>> 593acf49092be174e4a1b4cf0949c509e27d4a05
export default FormInput;
