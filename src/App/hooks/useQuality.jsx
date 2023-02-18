import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import QualityService from "../services/quality.service";
import { toast } from "react-toastify";

const QualityContext = React.createContext();

export const useQualities = () => {
    return useContext(QualityContext);
};

export const QualityProvider = ({ children }) => {
    const [qualities, setQualities] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
            setLoading(false);
        }
    }, [error]);

    useEffect(() => {
        getQualitiesList();
    }, []);

    async function getQualitiesList() {
        try {
            const { content } = await QualityService.get();
            setQualities(content);
            setLoading(false);
        } catch (error) {
            errorCatcher(error);
        }
    }

    function getQuality(id) {
        return qualities.find((q) => q._id === id);
    }
    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
    }
    return (<QualityContext.Provider value={{ isLoading, qualities, getQuality }}>
        {children}
    </QualityContext.Provider>);
};

QualityProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
