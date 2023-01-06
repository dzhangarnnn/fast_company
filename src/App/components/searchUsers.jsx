import React from "react";
import PropTypes from "prop-types";

const SearchUsers = ({ onChange, value }) => {
    return (
        <form>
            <div className="input-group mb-3">
                <input
                    type="search"
                    id="search"
                    name="search"
                    placeholder="search..."
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
    value: PropTypes.string
};

export default SearchUsers;
