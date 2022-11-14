import React, { useState } from "react";
import api from '../api';

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const getQualitieClasses = (qualitie) => {
        let classes = `badge m-2 bg-${qualitie.color}`
        return classes;
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
        if (number > 4 && number < 22) {
            return (<span className="h1 badge bg-primary">{number} человек тусанет с тобой сегодня</span>);
        } else if (number > 1) {
            return (<span className="badge bg-primary">{number} человека тусанут с тобой сегодня</span>);
        } else if (number === 1) {
            return (<span className="badge bg-primary">{number} человек тусанет с тобой сегодня</span>);
        } else {
            return (<span className="badge bg-danger">Никто с тобой не тусанет</span>)
        }
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
            {renderPhrase(users.length)}
            {renderTable()}
        </>
     );
};

export default Users;