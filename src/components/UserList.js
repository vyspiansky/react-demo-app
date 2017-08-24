import React, { Component } from 'react';

import './UserList.css';

class UserList extends Component {
    // createListItem(user) {
    //     return (
    //         <li key={user.id}>
    //             {user.id} - {user.name}
    //         </li>
    //     );
    // }

    render() {
        return (
            <ul className="user-list">
                {this.props.users.map(user => {
                    return (
                        <li key={user.id}>
                            {user.id} - {user.name}
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default UserList;