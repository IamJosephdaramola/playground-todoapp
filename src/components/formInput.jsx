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
                />
            </div>
        </div>
    );
};
FormInput.propTypes = {
    label: PropTypes.func.isRequired,
    name: PropTypes.func.isRequired,
    placeholder: PropTypes.func.isRequired,
    className: PropTypes.func.isRequired,
};
export default FormInput;
