import React, { Component } from "react";

class BattleLog extends Component {
  render() {
    return (
      <div id="userInterface-chatlog-div">
          <br/>
        <div id="userInterface-chatlog-div-paragraphs">
          {this.props.mainState.battleLogParagraphsToBeRendered}
        </div>
      </div>
    );
  }
}

export default BattleLog;
