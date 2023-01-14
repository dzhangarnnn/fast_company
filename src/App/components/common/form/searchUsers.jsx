import React from "react";
import PropTypes from "prop-types";

const SearchUsers = ({ onChange, value, type, placeholder }) => {
    return (
        <form>
            <div className="input-group mb-3">
                <input
                    type={type}
                    id={type}
                    name={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="form-control"
                />
            </div>
        </form>
    );
};
SearchUsers.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string
};

export default SearchUsers;
