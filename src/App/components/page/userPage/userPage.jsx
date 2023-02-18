import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
<<<<<<< HEAD
import api from "../../../api";
import UserCard from "../../ui/userCard";
import QualitiesCard from "../../ui/qualitiesCard";
import MeetingsCard from "../../ui/meetingsCard";
=======
import api from "../../../../api";
import UserCard from "../../ui/userCard";
import QualitiesCard from "../../ui/qualitiesCard";
import MeetingsCard from "../../ui/qualities/meetingsCard";
>>>>>>> d3ad0342b85ca67d592c905426c6cc651fbdd2a0
import Comments from "../../ui/comments";

const UserPage = ({ userId }) => {
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);
<<<<<<< HEAD
=======

>>>>>>> d3ad0342b85ca67d592c905426c6cc651fbdd2a0
    if (user) {
        return (
            <div className="container">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <UserCard user={user} />
<<<<<<< HEAD
                        <QualitiesCard data={user.qualities} />
=======
                        <QualitiesCard qualities={user.qualities} />
>>>>>>> d3ad0342b85ca67d592c905426c6cc651fbdd2a0
                        <MeetingsCard value={user.completedMeetings} />
                    </div>
                    <div className="col-md-8">
                        <Comments />
                    </div>
                </div>
            </div>
        );
    } else {
        return <h1>Loading</h1>;
    }
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;
