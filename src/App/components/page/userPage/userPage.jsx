import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import api from "../../../../api";
import Qualities from "../../ui/qualities";
import EditForm from "../../common/form/editForm";

const UserPage = ({ userId }) => {
    const [user, setUser] = useState();
    const { editPage } = useParams();
    const history = useHistory();

    useEffect(() => {
        api.users.getById(userId).then(data => setUser(data));
    }, []);

    const goToUsers = () => {
        history.replace(`/users/${userId}/edit`);
    };

    if (user) {
        return (
            <div>
                {editPage !== "edit" ? (
                    <>
                        <h1>{user.name}</h1>
                        <h2>Профессия: {user.profession.name}</h2>
                        <Qualities qualities={user.qualities} />
                        <p>completedMeetings: {user.completedMeetings}</p>
                        <h2>Rate: {user.rate}</h2>
                        <button
                            onClick={() => {
                                goToUsers();
                            }}
                        >
                            Изменить
                        </button>
                    </>
                ) : (
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-6 offset-md-3 shadow p-4">
                                <EditForm
                                    id={userId}
                                    user={user}
                                    setUser={setUser}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
    return "loading...";
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;
