import React from "react";

import Story from "./story";
import StoryFunctional from "../functional-components/story";

class App extends React.Component {
  render() {
    return (
      <div>
        <Story />
        <StoryFunctional />
      </div>
    );
  }
}

export default App;
