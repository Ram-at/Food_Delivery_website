import React from "react";
import User from "./user";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "vaibhav",
        location: "Rewa",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Ram-at");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { name, login, avatar_url } = this.state.userInfo;
    return (
      <div>
        <h3>Name : {name}</h3>

        <img src={avatar_url}></img>
        <h3>Username :{login}</h3>
      </div>
    );
  }
}
export default UserClass;
