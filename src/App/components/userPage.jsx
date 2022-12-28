import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import api from "../../api";
import QualitiesList from "./qualitiesList";

const UserPage = ({ userId }) => {
    const [user, setUser] = useState();
    const history = useHistory();

    useEffect(() => {
        api.users.getById(userId).then(data => setUser(data));
    }, []);

    const goToUsers = () => {
        history.replace("/users");
    };

    if (user) {
        return (
            <>
                <h1>{user.name}</h1>
                <h2>Профессия: {user.profession.name}</h2>
                <QualitiesList qualities={user.qualities} />
                <p>completedMeetings: {user.completedMeetings}</p>
                <h2>Rate: {user.rate}</h2>
                <button
                    onClick={() => {
                        goToUsers();
                    }}
                >
                    Все пользователи
                </button>
            </>
        );
    }
    return "loading...";
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;
