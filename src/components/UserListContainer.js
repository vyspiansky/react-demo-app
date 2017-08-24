import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import 'whatwg-fetch';

import UserList from './UserList.js';

class UserListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        var that = this;

        fetch('/data/users.json')
            .then(function(response) {
                return response.json()
            }).then(function(json) {
                that.setState({users: json.users})
            }).catch(function(error) {
                console.log('Request failed', error)
            });

    }
    
    render() {
        return (
            <div>
                <Helmet>
                    <title>Users</title>
                </Helmet>

                <h1>Users</h1>
                <UserList users={this.state.users} />
            </div>
        );
    }
}
  
export default UserListContainer;