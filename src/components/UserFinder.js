import { Component, Fragment } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';

import UsersContext from '../store/users-context';
import ErrorBoundary from './ErrorBoundary';

// const DUMMY_USERS = [
//   { id: 'u1', name: 'Max' },
//   { id: 'u2', name: 'Manuel' },
//   { id: 'u3', name: 'Julie' },
//   { id: 'u4', name: 'Adam' },
// ];

class UserFinder extends Component {
  // just one context per class component - alternative UseCosnumer
  static contextType = UsersContext;

  constructor() {
    super();

    this.state = {
      filteredUsers: [],
      searchTerm: '',
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      console.log('DID UPDATE');
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  componentDidMount() {
    console.log('DID MOUNT');
    this.setState({ filteredUsers: this.context.users });
  }

  searchChangeHandler(e) {
    this.setState({
      searchTerm: e.target.value,
    });
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

export default UserFinder;
