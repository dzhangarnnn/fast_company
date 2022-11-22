import React from "react";

const BookMark = ({status, ...rest}) => {
    return (
        <button {...rest}>
            <i class={"bi bi-bookmark" + (status ? "-heart" : '')}></i>
        </button>
    );
};

export default BookMark;