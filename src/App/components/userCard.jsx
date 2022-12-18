import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import api from "../../api";
import QualitiesList from "./qualitiesList";

const UserCard = () => {
    const { userId } = useParams();
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

export default UserCard;
