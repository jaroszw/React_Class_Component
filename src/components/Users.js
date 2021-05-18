import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';

// const DUMMY_USERS = [
//   { id: 'u1', name: 'Max' },
//   { id: 'u2', name: 'Manuel' },
//   { id: 'u3', name: 'Julie' },
// ];

class Users extends Component {
  constructor() {
    super();

    this.state = {
      showUsers: true,
      moreState: 'Test',
    };
  }

  componentDidUpdate() {
    console.log('USERS DID UPDATED');
    if (this.props.users.length === 0) {
      throw new Error('No users provided');
    }
  }

  componentDidMount() {
    console.log('USERS DID MOUNT');
  }

  toggleUserHandler() {
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => {
          return <User key={user.id} name={user.name} />;
        })}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUserHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
