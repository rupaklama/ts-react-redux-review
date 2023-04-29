import React, { Component } from "react";

// just to look cleaner defining User interface here
interface User {
  id: number;
  name: string;
  age: number;
}

interface Props {
  // users: {
  //   id: number;
  //   name: string;
  //   age: number;
  // }[];
  users: User[];
}

interface UserState {
  name: string;
  // user: { id: number; name: string; age: number } | undefined;
  user: User | undefined;
}

export default class UserSearchClass extends Component<Props> {
  state: UserState = {
    name: "",

    // note - Object is 'undefined' on initial render
    user: undefined,
  };

  onClick = () => {
    const foundUser = this.props.users.find(user => user.name === this.state.name);

    this.setState({ user: foundUser });
  };

  render() {
    const { name, user } = this.state;

    return (
      <div>
        <h2>User Search</h2>
        <input type="text" value={name} onChange={e => this.setState({ name: e.target.value })} />

        <button onClick={this.onClick}>Find User</button>

        <div>
          {user && user.name} {user && user.age}
        </div>
      </div>
    );
  }
}
