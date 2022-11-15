import React, { useState } from "react";
import api from '../api';

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const getQualitieClasses = (qualitie) => {
        return classes = `badge m-2 bg-${qualitie.color}`;  
    };

    const renderQualitiesBadges = (user) => {
        return user.qualities.map((qualitie) => (
            <span
                key={qualitie._id} 
                className= {getQualitieClasses(qualitie)}
            >
                {qualitie.name}
            </span>
        ))
    };

    const renderUsersRows = () => {
        return users.map((user) => (
            <tr key={user._id}>
                <td>{user.name}</td>
                <td>{renderQualitiesBadges(user)}</td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
                <td>
                    <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(user._id)}
                    >
                        delete
                    </button>
                </td>
            </tr>

        ));
    };

    const handleDelete = (userId) => {
        setUsers(prevState => prevState.filter((user) => user._id !== userId));
    };
    const renderPhrase = (number) => {
        const lastOne = Number(number.toString().slice(-1));
        if (number > 4 && number < 15) return "человек тусанет";
        if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут";
        if (lastOne === 1) return "человек тусанет";
        return "человек тусанет";
    };    

    const renderTable = () => {
        if (users.length !== 0) {
            return  (<table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Имя</th>
                                <th scope="col">Качества</th>
                                <th scope="col">Профессия</th>
                                <th scope="col">Встретился, раз</th>
                                <th scope="col">Оценка</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderUsersRows()}
                        </tbody>
                    </table>)
        } 
    };
       
    return (
        <> 
            <h2>
                <span
                    className={"badge " + (users.length > 0 ? "bg-primary" : "bg-danger")}
                >
                    {users.length > 0
                        ? `${users.length + " " + renderPhrase(users.length)} с тобой сегодня`
                        : "Никто с тобой не тусанет"}
                </span>
            </h2>
            {renderTable()}
        </>
     );
};

export default Users;
