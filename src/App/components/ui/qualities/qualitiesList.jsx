import React from "react";
import PropTypes from "prop-types";
import Quality from "./quality";
import { useQualities } from "../../../hooks/useQuality";

const QualitiesList = ({ qualitiesIds }) => {
    const { getQuality, isLoading } = useQualities();

    if (!isLoading) {
        return (
            <>
                {qualitiesIds.map((id) => (
                    <Quality key={id} {...getQuality(id)} />
                ))}
            </>
        );
    } else return "...loading";
};

QualitiesList.propTypes = {
    qualitiesIds: PropTypes.array
};

export default QualitiesList;
