import "./App.css";
import Profile from "./Profile";
import React, { Component } from "react";

class Id extends Component {
  constructor() {
    super();
    this.state = {
      Person: {
        fullName: "Smoky The Great",
        bio: "Do you realy want to know? Bad idea my friend",
        imgScr: "./cat_dev.jpg",
        profession: "Computer Stuff",
      },
      show: false,
      digit: 0,
    };
  }

  showFunction() {
    this.setState({
      show: !this.state.show,
    });
  }

  componentDidMount = () => {
    this.myInterval = setInterval(() => {
      this.setState((prevState) => ({ digit: prevState.digit + 1 }));
    }, 500);
  };

  componentWillUnmount = () => {
    clearInterval(this.myInterval);
  };

  render() {
    return (
      <div className="App">
        <button
          style={{
            marginTop: "10px",
            backgroundColor: "black",
            color: "white",
          }}
          onClick={() => {
            this.showFunction();
          }}
        >
          {this.state.show === true ? "Hide Profile" : "Show Profile"}
        </button>
        <div>
          {this.state.show === true ? (
            <div>
              <span>{this.state.digit}</span>
              <Profile
                fullName={this.state.Person.fullName}
                bio={this.state.Person.bio}
                img={this.state.Person.imgScr}
                profession={this.state.Person.profession}
              />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Id;
