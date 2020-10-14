import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    let wordDisplay;
    if (this.state.isLoggedIn === true) {
      wordDisplay = "In";
    } else {
      wordDisplay = "out";
    }

    return (
      <div>
        <h2>You're Currently Logged {wordDisplay} </h2>
      </div>
    );
  }
}

export default App;
