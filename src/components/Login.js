import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSetAuthedUser } from "../actions/authedUser";

class Login extends Component {
  state = {
    value: "sarahedo"
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(handleSetAuthedUser(this.state.value));
  };

  render() {
    const { users } = this.props;

    return (
      <form className="login-box" onSubmit={this.handleSubmit}>
        <div>
          <h3>Welcome to Would You Rather app</h3>
          <span>Please sign in to continue</span>
        </div>

        <h3>Sign In</h3>
        <select value={this.state.value} onChange={this.handleChange}>
          {users.map((user, id) => (
            <option key={id} value={user}>
              {user}
            </option>
          ))}
        </select>
        <input type="submit" value="Sign in" className="btn" />
      </form>
    );
  }
}

const mapStateToProps = ({ users, authedUser }) => ({
  users: Object.keys(users),
  authedUser
});

export default connect(mapStateToProps)(Login);
