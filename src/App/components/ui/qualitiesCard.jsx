import React from "react";
<<<<<<< HEAD
import Qualities from "./qualities";
import PropTypes from "prop-types";

const QualitiesCard = ({ data }) => {
=======
import PropTypes from "prop-types";
import Qualities from "./qualities";

const QualitiesCard = ({ qualities }) => {
>>>>>>> d3ad0342b85ca67d592c905426c6cc651fbdd2a0
    return (
        <div className="card mb-3">
            <div className="card-body d-flex flex-column justify-content-center text-center">
                <h5 className="card-title">
                    <span>Qualities</span>
                </h5>
                <p className="card-text">
<<<<<<< HEAD
                    <Qualities qualities={data} />
=======
                    {<Qualities qualities={qualities} />}
>>>>>>> d3ad0342b85ca67d592c905426c6cc651fbdd2a0
                </p>
            </div>
        </div>
    );
};
QualitiesCard.propTypes = {
<<<<<<< HEAD
    data: PropTypes.array
=======
    qualities: PropTypes.array
>>>>>>> d3ad0342b85ca67d592c905426c6cc651fbdd2a0
};

export default QualitiesCard;
