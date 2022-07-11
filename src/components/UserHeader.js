import React from "react";

class UserHeader extends React.Component {
  render() {
    return <div>User: {this.props.userId}</div>;
  }
}

export default UserHeader;
