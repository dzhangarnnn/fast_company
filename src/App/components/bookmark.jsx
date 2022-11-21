import React from "react";

const BookMark = ({status, ...rest}) => {
    return (
        <i class={"bi bi-bookmark" + (status ? "-heart" : '')} {...rest}></i>
    );
};

export default BookMark;